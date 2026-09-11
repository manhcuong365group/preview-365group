(() => {
      const root = document.querySelector("#tb-product");
      if (!root) return;

      const variants = {
        round: {
          label: "Lens tròn 3 inch",
          short: "Lens tròn",
          size: "130 × 80 × 80 mm"
        },
        square: {
          label: "Lens vuông 3 inch",
          short: "Lens vuông",
          size: "130 × 80 × 65 mm"
        }
      };

      root.addEventListener("click", event => {
        const button = event.target.closest("[data-variant]");
        if (!button) return;

        const key = button.dataset.variant;
        const variant = variants[key];
        if (!variant) return;

        root.querySelectorAll("[data-variant]").forEach(btn => {
          btn.setAttribute("aria-pressed", String(btn === button));
        });

        root.querySelector("[data-variant-label]").textContent = variant.label;
        root.querySelector("[data-variant-size]").textContent = variant.size;
        root.querySelector("[data-mobile-variant]").textContent = variant.short;
      });

      root.querySelectorAll("#tb-fit-form,#tb-faq-form").forEach(form => {
        form.addEventListener("submit", async event => {
          event.preventDefault();
          if (!form.reportValidity()) return;

          const submit = form.querySelector('button[type="submit"]');
          const status = form.querySelector("[data-form-status]");
          const data = new FormData(form);
          const idempotencyKey = crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
          const activeVariant = root.querySelector('[data-variant][aria-pressed="true"]')?.textContent?.trim() || "Chưa chọn";
          data.set("full_name", data.get("name") || "");
          data.set("vehicle", [data.get("brand"), data.get("model")].filter(Boolean).join(" ") || "Chưa cung cấp");
          data.set("vehicle_year_version", data.get("year") || "Chưa cung cấp");
          data.set("lens_variant", activeVariant);
          data.set("source_page", "titan-black-2026");
          data.set("request_type", "remote_quote");
          data.set("privacy_consent", data.get("consent") === "on" ? "1" : "");
          data.set("consent_timestamp", new Date().toISOString());
          data.set("idempotency_key", idempotencyKey);
          if (submit) { submit.disabled = true; submit.textContent = "Đang gửi yêu cầu…"; }
          if (status) { status.dataset.state = ""; status.textContent = ""; }
          const controller = new AbortController();
          const timeout = window.setTimeout(() => controller.abort(), 12000);
          try {
            const response = await fetch(form.action, {
              method: "POST",
              body:data,
              headers:{ "Accept":"application/json", "X-Idempotency-Key":idempotencyKey },
              signal:controller.signal
            });
            let payload = {};
            try { payload = await response.json(); } catch (_) {}
            if (!response.ok || !payload.lead_id) throw new Error("invalid_response");
            form.reset();
            if (status) status.textContent = `Auto365 đã nhận yêu cầu. Mã tiếp nhận: ${String(payload.lead_id).slice(0,60)}.`;
          } catch (error) {
            if (status) {
              status.dataset.state = "error";
              status.textContent = error.name === "AbortError" ? "Hệ thống phản hồi chậm. Vui lòng thử lại hoặc liên hệ Hotline 0365 365 911." : "Chưa gửi được yêu cầu. Vui lòng thử lại, gọi Hotline 0365 365 911 hoặc nhắn Zalo.";
            }
          } finally {
            window.clearTimeout(timeout);
            if (submit) { submit.disabled = false; submit.textContent = form.id === "tb-faq-form" ? "Gửi yêu cầu tư vấn" : "Nhận tư vấn phương án lắp"; }
          }
        });
      });

      root.querySelectorAll("#faq details").forEach(detail => {
        const summary = detail.querySelector("summary");
        let summaryTop = null;
        const preserveSummaryPosition = () => { summaryTop = summary?.getBoundingClientRect().top ?? null; };

        summary?.addEventListener("pointerdown", preserveSummaryPosition, { passive:true });
        summary?.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") preserveSummaryPosition();
        });
        detail.addEventListener("toggle", () => {
          if (summaryTop === null || !summary) return;
          requestAnimationFrame(() => {
            window.scrollBy({ top:summary.getBoundingClientRect().top - summaryTop, behavior:"auto" });
            summaryTop = null;
          });
        });
      });

      const installFilters = [...root.querySelectorAll("[data-install-filter]")];
      const installCards = [...root.querySelectorAll("[data-install-brand]")];
      installFilters.forEach(button => {
        button.addEventListener("click", () => {
          const brand = button.dataset.installFilter;
          installFilters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
          installCards.forEach(card => { card.hidden = !(brand === "all" || card.dataset.installBrand === brand); });
        });
      });

      const specifications = root.querySelector("#thong-so");
      const comparison = root.querySelector("#so-sanh");
      if (specifications && comparison) comparison.before(specifications);

      const pageFlow = [
        "kiem-tra-xe", "video-teaser", "nhu-cau", "thong-so", "anh-sang", "thiet-ke",
        "tuong-thich", "so-sanh", "tb-fit-summary", "tb-consult-cta", "tb-actual-2026",
        "case-xe", "lap-dat", "tb-trusted-address", "faq", "trust"
      ];
      pageFlow.forEach(id => {
        const section = root.querySelector(`#${id}`);
        if (section) root.append(section);
      });
      const footer = root.querySelector(".tb-footer");
      if (footer) root.append(footer);
      const anchoredSection = location.hash ? root.querySelector(location.hash) : null;
      if (anchoredSection) requestAnimationFrame(() => anchoredSection.scrollIntoView());
    })();

(() => {
  const root = document.querySelector("#tb-product");
  if (!root || !("IntersectionObserver" in window)) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const targets = [...root.querySelectorAll(
    ".tb-section-head,.tb-light-card,.tb-feature,.tb-fit-card,.tb-package-media," +
    ".tb-spec-panel,.tb-price-panel,.tb-process__step,.tb-handover-media," +
    ".tb-checklist,.tb-faq details,.tb-final"
  )];

  const css = document.createElement("style");
  css.textContent = `
    #tb-product .tb-reveal{
      opacity:0;
      transform:translateY(8px);
      transition:opacity 400ms cubic-bezier(.16,1,.3,1),transform 440ms cubic-bezier(.16,1,.3,1);
    }
    #tb-product .tb-reveal.tb-in{opacity:1;transform:none}
  `;
  document.head.appendChild(css);

  targets.forEach(el => el.classList.add("tb-reveal"));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("tb-in");
      observer.unobserve(entry.target);
    });
  }, { rootMargin:"0px 0px -7% 0px", threshold:.06 });

  targets.forEach(el => observer.observe(el));
})();

(() => {
  const root = document.querySelector('#tb-product');
  if (!root) return;
  const button = root.querySelector('[data-find-nearby]');
  const status = root.querySelector('[data-nearby-status]');
  button?.addEventListener('click', () => {
    if (!navigator.geolocation) {
      if (status) status.textContent = 'Thiết bị không hỗ trợ định vị. Hãy mở trang hệ thống Auto365 để tra cứu thủ công.';
      return;
    }
    if (status) status.textContent = 'Đang xác định vị trí…';
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        const url = new URL('https://auto365.vn/chi-nhanh');
        url.searchParams.set('lat', coords.latitude.toFixed(6));
        url.searchParams.set('lng', coords.longitude.toFixed(6));
        if (status) {
          const a = document.createElement('a');
          a.href = url.href;
          a.textContent = 'Mở danh sách điểm Auto365 gần bạn →';
          status.replaceChildren(document.createTextNode('Đã lấy vị trí. '), a);
        }
      },
      () => { if (status) status.textContent = 'Chưa thể lấy vị trí. Bạn vẫn có thể tra cứu hệ thống Auto365 thủ công.'; },
      {timeout:8000, maximumAge:300000, enableHighAccuracy:false}
    );
  });
})();

(() => {
  const root = document.querySelector("#tb-product");
  if (!root) return;

  const bookingForm = root.querySelector("#tb-booking-form");
  bookingForm?.addEventListener("submit", event => {
    event.preventDefault();
    const status = root.querySelector("[data-booking-status]");
    if (status) {
      status.textContent = "Đã ghi nhận mẫu. Khi production, thay endpoint và thông tin CRM thật.";
    }
  });

  const rail = root.querySelector("[data-case-rail]");
  const filterButtons = [...root.querySelectorAll("[data-case-filter]")];

  function updateCaseFilter(brand) {
    filterButtons.forEach(btn => {
      btn.setAttribute("aria-pressed", String(btn.dataset.caseFilter === brand));
    });

    root.querySelectorAll("[data-case-brand]").forEach(card => {
      card.hidden = !(brand === "all" || card.dataset.caseBrand === brand);
    });

    rail?.scrollTo({ left: 0, behavior: "smooth" });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => updateCaseFilter(btn.dataset.caseFilter));
  });

  root.querySelector("[data-case-prev]")?.addEventListener("click", () => {
    rail?.scrollBy({ left: -(rail.clientWidth * .9), behavior: "smooth" });
  });

  root.querySelector("[data-case-next]")?.addEventListener("click", () => {
    rail?.scrollBy({ left: rail.clientWidth * .9, behavior: "smooth" });
  });
})();
