
document.documentElement.classList.add("js");

(() => {
  const containerId = "GTM-TFQ7KC2";
  const alreadyLoaded = window.google_tag_manager?.[containerId]
    || document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${containerId}"]`);
  if (alreadyLoaded) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.appendChild(script);
})();

(() => {
  "use strict";

  const PRICE_VERSION = "3M-AUTO365-2026-06";
  const ZALO_URL = "https://zalo.me/3820993010764366025";
  const PHONE = "0365365365";

  const packages = [
    { id: "ceramic-nr", configCode: "CNR", shortName: "Ceramic Hybrid", fullName: "3M Ceramic Hybrid", positioning: "Ưu tiên chi phí", windshield: "NR 35", body: "NR 25 / NR 15 / NR 5", prices: { minicar: 5900000, sedan: 7900000, suv: 9500000 }, fit: ["heat", "family"], tradeoff: "NR 35 ở kính lái; nên xem mẫu thực tế để cân nhắc độ sáng theo nhu cầu.", level: 1 },
    { id: "ceramic-ir", configCode: "CIR", shortName: "Ceramic IR", fullName: "3M Ceramic IR", positioning: "Cấu hình cân bằng", windshield: "IR 50", body: "IR 25 / IR 15", prices: { minicar: 7200000, sedan: 9000000, suv: 10500000 }, fit: ["night", "family", "heat"], tradeoff: "Dùng IR 50 ở kính lái; không dùng Crystalline cho kính lái trong cấu hình này.", level: 2 },
    { id: "crystalline-hybrid", configCode: "CRYH", shortName: "Crystalline Hybrid", fullName: "3M Crystalline Hybrid", positioning: "Kính lái Crystalline", windshield: "CR BLK 60 / CR BLK 50", body: "NR 25 / NR 15 / NR 5", prices: { minicar: 9000000, sedan: 10800000, suv: 12500000 }, fit: ["night", "family", "premium", "heat"], tradeoff: "Kính lái dùng CR BLK 60/50; sườn và lưng dùng Ceramic NR.", level: 3 },
    { id: "crystalline-hybrid-pro", configCode: "CRYHP", shortName: "Hybrid PRO", fullName: "3M Crystalline Hybrid PRO", positioning: "Kính lái CR BLK 40", windshield: "CR BLK 40", body: "NR 25 / NR 15 / NR 5", prices: { minicar: 9800000, sedan: 11600000, suv: 13300000 }, fit: ["premium", "heat"], tradeoff: "Kính lái dùng CR BLK 40; nên xem mẫu thực tế, nhất là khi thường xuyên đi đêm.", level: 4 },
    { id: "crystalline-cr-blk", configCode: "CRBLK", shortName: "CR BLK", fullName: "3M Crystalline CR BLK", positioning: "CR BLK toàn xe", windshield: "CR BLK 60 / CR BLK 50", body: "CR BLK 35 / CR BLK 15", prices: { minicar: 12200000, sedan: 14800000, suv: 17600000 }, fit: ["premium", "night", "heat"], tradeoff: "Dùng CR BLK cho kính lái và sườn/lưng; cần chọn mã kính lái theo thói quen sử dụng.", level: 5 },
    { id: "crystalline-cr-blk-pro", configCode: "CRBLKP", shortName: "CR BLK PRO", fullName: "3M Crystalline CR BLK PRO", positioning: "CR BLK toàn xe + lái 40", windshield: "CR BLK 40", body: "CR BLK 35 / CR BLK 15", prices: { minicar: 12900000, sedan: 15500000, suv: 18300000 }, fit: ["premium", "heat"], tradeoff: "Kính lái dùng CR BLK 40; nên so sánh trực tiếp với mã 50/60 trước khi chọn.", level: 6 }
  ];

  const modelsByBrand = {
    "VinFast": ["VF 3", "VF 5", "VF 6", "VF 7", "VF 8", "VF 9", "Fadil", "Lux A2.0", "Lux SA2.0", "Limo Green"],
    "Toyota": ["Wigo", "Vios", "Yaris", "Yaris Cross", "Corolla Altis", "Corolla Cross", "Camry", "Raize", "Veloz Cross", "Avanza", "Innova Cross", "Fortuner", "Hilux", "Land Cruiser"],
    "Mazda": ["Mazda 2", "Mazda 3", "Mazda 6", "CX-3", "CX-30", "CX-5", "CX-8"],
    "Honda": ["Brio", "City", "Civic", "HR-V", "BR-V", "CR-V", "Accord"],
    "Ford": ["Territory", "Everest", "Ranger", "Explorer", "Transit"],
    "Hyundai": ["Grand i10", "Accent", "Elantra", "Creta", "Tucson", "Santa Fe", "Palisade", "Stargazer"],
    "Kia": ["Morning", "Sonet", "Seltos", "Sportage", "K3", "K5", "Carens", "Sorento", "Carnival"],
    "Mitsubishi": ["Attrage", "Xforce", "Xpander", "Outlander", "Destinator", "Pajero Sport", "Triton"],
    "Nissan": ["Almera", "Kicks", "Navara", "Terra"],
    "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "V-Class"],
    "BMW": ["3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7", "i4", "i5", "iX"],
    "Audi": ["A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8", "e-tron GT"],
    "Lexus": ["IS", "ES", "LS", "NX", "RX", "GX", "LX", "LM"],
    "Volvo": ["S60", "S90", "XC40", "XC60", "XC90"],
    "Volkswagen": ["Polo", "Golf", "Virtus", "Passat", "T-Cross", "Tiguan", "Teramont", "Viloran"],
    "Peugeot": ["2008", "3008", "408", "5008"],
    "Suzuki": ["Swift", "Ciaz", "Jimny", "XL7", "Ertiga"],
    "Subaru": ["Impreza", "WRX", "Crosstrek", "Forester", "Outback"],
    "MG": ["MG4", "MG5", "ZS", "HS", "RX5", "G50"],
    "Porsche": ["718", "911", "Taycan", "Panamera", "Macan", "Cayenne"],
    "Land Rover": ["Range Rover Evoque", "Range Rover Velar", "Discovery Sport", "Discovery", "Defender", "Range Rover Sport"],
    "Wuling": ["Hongguang Mini EV", "Bingo", "Alvez"]
  };

  const minicarModels = new Set(["VF 3", "Hongguang Mini EV", "Wigo", "Brio"]);
  const sedanModels = new Set([
    "Fadil", "Lux A2.0", "Grand i10", "Morning", "Mazda 2", "Attrage", "Almera", "Vios", "Yaris", "Corolla Altis", "Camry", "Mazda 3", "Mazda 6", "City", "Civic", "Accord", "Accent", "Elantra", "K3", "K5", "C-Class", "E-Class", "S-Class", "3 Series", "5 Series", "7 Series", "i4", "i5", "A4", "A6", "A8", "e-tron GT", "IS", "ES", "LS", "S60", "S90", "Polo", "Golf", "Virtus", "Passat", "Swift", "Ciaz", "Impreza", "WRX", "MG4", "MG5", "718", "911", "Taycan", "Panamera", "Bingo"
  ]);

  const labels = {
    group: { minicar: "Minicar", sedan: "Sedan / Hatchback", suv: "SUV / CUV / MPV / Pickup" },
    need: { heat: "Ưu tiên giảm nóng", night: "Thường xuyên đi đêm", family: "Gia đình / cân bằng", premium: "Ưu tiên trải nghiệm" },
    budget: { max8: "Tối đa 8 triệu", max11: "Tối đa 11 triệu", max14: "Tối đa 14 triệu", max18: "Tối đa 18 triệu", max183: "Tối đa 18,3 triệu", open: "Chưa giới hạn" },
    lane: { saving: "Phương án tiết kiệm", recommended: "Phương án cân bằng", upgrade: "Phương án nâng cấp" }
  };
  const budgetMaximum = { max8: 8000000, max11: 11000000, max14: 14000000, max18: 18000000, max183: 18300000, open: Infinity };
  const targetByNeed = { night: "crystalline-hybrid", family: "crystalline-hybrid", heat: "crystalline-hybrid-pro", premium: "crystalline-cr-blk" };
  const DEFAULT_GROUP = "minicar";

  const shell = document.getElementById("filmmatch");
  if (!shell) return;
  const advisorCards = shell.querySelectorAll(".advisor-card");
  if (advisorCards.length < 4) return;
  const brandSelect = advisorCards[0].querySelectorAll("select")[0];
  const modelSelect = advisorCards[0].querySelectorAll("select")[1];
  const typeFallback = advisorCards[0].querySelector(".vehicle-type-toggle input");
  const modelLabel = advisorCards[0].querySelector("#vehicle-model-label");
  const needSelect = advisorCards[1].querySelector("select");
  const budgetSelect = advisorCards[2].querySelector("select");
  const prefSelects = advisorCards[3].querySelectorAll("select");
  const nightSelect = prefSelects[0];
  const windshieldSelect = prefSelects[1];
  const privacySelect = prefSelects[2];
  const sunroofSelect = prefSelects[3];
  const mobileBar = shell.querySelector(".mobile-conversion-bar");

  const consultation = consultationId();
  let revision = 1;
  let hasResult = false;
  let selectedConfigId = null;
  let selectedLane = null;
  let latestResult = null;
  let vehicleChosen = false;
  let leadClosed = true;
  let leadOverridePkg = null;
  const leadDraft = { name: "", phone: "", vehicle: "", province: "" };

  const state = {
    brand: "",
    model: "",
    group: "",
    need: "family",
    budget: budgetSelect.value || "max14",
    windshield: windshieldSelect.value || "balanced",
    nightFrequency: nightSelect.value || "auto",
    privacy: privacySelect.value || "balanced",
    sunroof: sunroofSelect.value || "none"
  };

  const disclosure = document.createElement("div");
  disclosure.className = "standalone-disclosure";
  disclosure.innerHTML = "<strong>Thông tin chỉ được gửi khi anh/chị bấm xác nhận</strong><span>Auto365 dùng thông tin để liên hệ tư vấn cấu hình và báo giá theo xe.</span>";
  shell.querySelector(".section-heading").insertAdjacentElement("afterend", disclosure);

  let advisorError = document.createElement("p");
  advisorError.className = "advisor-error";
  advisorError.setAttribute("role", "alert");
  advisorError.hidden = true;
  shell.querySelector(".advisor-grid").insertAdjacentElement("afterend", advisorError);

  const resultStatus = document.createElement("p");
  resultStatus.className = "sr-only";
  resultStatus.setAttribute("role", "status");
  resultStatus.setAttribute("aria-live", "polite");
  resultStatus.setAttribute("aria-atomic", "true");
  advisorError.insertAdjacentElement("afterend", resultStatus);

  function consultationId() {
    const now = new Date();
    const date = `${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    return `FM11-${date}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }

  function inferGroup(model) {
    if (minicarModels.has(model)) return "minicar";
    if (sedanModels.has(model)) return "sedan";
    for (const models of Object.values(modelsByBrand)) if (models.includes(model)) return "suv";
    return "";
  }

  function formatDong(value) {
    return `${value.toLocaleString("vi-VN")}đ`;
  }

  function formatPrice(value) {
    const millions = value / 1000000;
    return `${millions.toLocaleString("vi-VN", { minimumFractionDigits: millions % 1 ? 1 : 0 })} triệu`;
  }

  function vehicleBrand() { return state.brand || "Chưa rõ hãng"; }
  function vehicleModel() { return state.model || "Chưa rõ dòng xe"; }
  function vehicleLabel() {
    // Nhieu model da chua san ten hang (vd "Mazda 6") — tranh lap thanh "Mazda Mazda 6".
    const brand = state.brand || "";
    const model = state.model || "";
    const modelHasBrand = brand && model.toLowerCase().startsWith(brand.toLowerCase());
    const parts = modelHasBrand ? [model] : [brand, model].filter(Boolean);
    return parts.length ? parts.join(" ") : "Chưa chọn xe";
  }

  function effectiveNight() {
    if (state.nightFrequency && state.nightFrequency !== "auto") return state.nightFrequency;
    if (state.need === "night") return "often";
    if (state.need === "family") return "sometimes";
    return "rare";
  }

  // Dung chung cho FilmMatch va nut "Nhan bao gia" tren tung the goi (data-quote-pkg),
  // de CTA truc tiep khong bo qua canh bao tuong thich nhu FilmMatch.
  function packageIsCompatible(pkg) {
    const brightSensitive = state.need === "night" || state.windshield === "bright" || effectiveNight() === "often";
    const windshieldFits = !brightSensitive || (!pkg.windshield.includes("40") && pkg.id !== "ceramic-nr");
    const needFits = state.need !== "premium" || pkg.fit.includes("premium");
    return windshieldFits && needFits;
  }

  function packageCaution(pkg) {
    if (packageIsCompatible(pkg)) return "";
    const brightSensitive = state.need === "night" || state.windshield === "bright" || effectiveNight() === "often";
    if (state.need === "premium" && !pkg.fit.includes("premium")) return "Không nằm trong nhóm cấu hình cao cấp anh/chị đang ưu tiên — hiển thị để so sánh mức giá.";
    if (brightSensitive) return `Kính lái ${windshieldCode(pkg)} tối hơn mức ưu tiên khi hay đi đêm — cần xem mẫu phim thực tế trên kính xe trước khi dán.`;
    return "Cần xem mẫu phim thực tế trên kính xe trước khi dán.";
  }

  function windshieldCode(pkg) {
    const preferBright = state.windshield === "bright" || effectiveNight() === "often";
    if (pkg.windshield.includes("60 / CR BLK 50")) return preferBright ? "CR BLK 60" : "CR BLK 50";
    if (pkg.id === "ceramic-nr") return "NR 35";
    return pkg.windshield;
  }

  function bodyCodes(pkg) {
    if (pkg.body.startsWith("CR BLK")) {
      if (state.privacy === "standard") return "CR BLK 35 sườn/lưng";
      if (state.privacy === "high") return "CR BLK 15 sườn/lưng · cần xác nhận tầm nhìn";
      return "CR BLK 35 sườn trước · CR BLK 15 sườn sau/lưng";
    }
    if (pkg.body.startsWith("IR")) {
      if (state.privacy === "standard") return "IR 25 sườn/lưng";
      if (state.privacy === "high") return "IR 15 sườn/lưng · cần xác nhận tầm nhìn";
      return "IR 25 sườn trước · IR 15 sườn sau/lưng";
    }
    if (state.privacy === "high") return "NR 25 sườn trước · NR 5 sườn sau/lưng";
    if (state.privacy === "standard") return "NR 25 sườn/lưng";
    return "NR 25 sườn trước · NR 15 sườn sau/lưng";
  }

  function reasonFor(pkg) {
    const ws = windshieldCode(pkg);
    if (state.need === "night") return `Cấu hình dùng ${ws} ở kính lái để anh/chị so sánh theo nhu cầu đi đêm; nên xem mẫu thực tế trước khi chọn.`;
    if (state.need === "family") return "Phương án để so sánh khi muốn cân đối độ sáng kính lái, riêng tư và ngân sách.";
    if (state.need === "heat") return "Phương án được sắp xếp theo nhu cầu giảm nóng và ngân sách đã chọn.";
    return "Phương án dùng các cấu hình Crystalline để anh/chị so sánh theo nhu cầu và ngân sách.";
  }

  function track(event, payload = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, price_version: PRICE_VERSION, standalone_html: true, ...payload });
  }

  // Phan loai loi thanh nhan an toan, khong day noi dung error.message tho (co the chua PII/stack trace) vao GTM.
  function classifyErrorReason(error) {
    if (error && error.name === "AbortError") return "timeout";
    if (error instanceof TypeError) return "network_error";
    const msg = String(error && error.message || "");
    if (/^Lead submission returned \d+/.test(msg)) return "http_error";
    if (/khong xac nhan|did not confirm/i.test(msg)) return "unconfirmed_response";
    return "unknown_error";
  }

  function refreshResult() {
    selectedConfigId = null;
    selectedLane = null;
    hasResult = true;
    latestResult = selectLanes();
    renderResult();
  }

  function hideResult() {
    hasResult = false;
    selectedConfigId = null;
    selectedLane = null;
    latestResult = null;
    shell.querySelector(".result-area")?.remove();
    resultStatus.textContent = "";
  }

  function mutate(next = {}) {
    Object.assign(state, next);
    revision += 1;
    refreshResult();
    advisorError.hidden = true;
    renderCurrentSummary();
    track("filmmatch_start", { changed_field: Object.keys(next)[0] || "custom_vehicle" });
  }

  function renderCurrentSummary() {
    const groupReadout = document.getElementById("group-readout-value");
    if (groupReadout) groupReadout.textContent = vehicleChosen ? labels.group[state.group] : "Chưa chọn nhóm xe — giá ví dụ theo Minicar";
  }

  const vehicleTypeOptions = '<option value="">Chọn loại xe</option><option value="Xe cỡ nhỏ / hatchback" data-group="minicar">Xe cỡ nhỏ</option><option value="Sedan" data-group="sedan">Sedan</option><option value="SUV / CUV / MPV / bán tải" data-group="suv">SUV / MPV / bán tải</option>';

  function syncModelState() {
    state.model = modelSelect.value;
    const group = modelSelect.options[modelSelect.selectedIndex]?.dataset.group || "";
    vehicleChosen = Boolean(group);
    state.group = group || DEFAULT_GROUP;
  }

  function renderVehicleSelector(useTypeFallback) {
    if (useTypeFallback || !state.brand) {
      modelLabel.textContent = "Loại xe";
      modelSelect.innerHTML = vehicleTypeOptions;
    } else {
      modelLabel.textContent = "Dòng xe";
      const models = modelsByBrand[state.brand] || [];
      modelSelect.innerHTML = models.length ? `<option value="">Chọn dòng xe</option>${models.map((model) => `<option value="${escapeHtml(model)}" data-group="${inferGroup(model) || "suv"}">${escapeHtml(model)}</option>`).join("")}` : vehicleTypeOptions;
    }
    syncModelState();
  }

  function selectLanes(forceId) {
    if (!state.group) return { lanes: [], nearest: null };
    const max = budgetMaximum[state.budget];
    const compatible = packages.filter((pkg) => {
      const brightSensitive = state.need === "night" || state.windshield === "bright" || effectiveNight() === "often";
      const windshieldFits = !brightSensitive || (!pkg.windshield.includes("40") && pkg.id !== "ceramic-nr");
      const needFits = state.need !== "premium" || pkg.fit.includes("premium");
      return windshieldFits && needFits;
    });
    const available = compatible.filter((pkg) => pkg.prices[state.group] <= max);
    const nearest = [...compatible].sort((a, b) => a.prices[state.group] - b.prices[state.group])[0] || null;

    const targetId = targetByNeed[state.need];
    const targetLevel = packages.find((pkg) => pkg.id === targetId)?.level || 3;
    const pickPool = available.length ? available : (compatible.length ? compatible : packages);
    const direct = forceId ? (pickPool.find((pkg) => pkg.id === forceId) || packages.find((pkg) => pkg.id === forceId)) : pickPool.find((pkg) => pkg.id === targetId);
    const ranked = [...pickPool].sort((a, b) => {
      const scoreA = (a.fit.includes(state.need) ? 30 : 0) - Math.abs(a.level - targetLevel) * 4;
      const scoreB = (b.fit.includes(state.need) ? 30 : 0) - Math.abs(b.level - targetLevel) * 4;
      return scoreB - scoreA || b.level - a.level;
    });
    const recommended = direct || ranked[0];
    let displayRecommended = recommended;
    const brightSensitive = state.need === "night" || state.windshield === "bright" || effectiveNight() === "often";
    const cautionFor = (pkg) => {
      if (compatible.some((item) => item.id === pkg.id)) return "";
      if (state.need === "premium" && !pkg.fit.includes("premium")) return "Không nằm trong nhóm cấu hình cao cấp anh/chị đang ưu tiên — hiển thị để so sánh mức giá.";
      if (brightSensitive) return `Kính lái ${windshieldCode(pkg)} tối hơn mức ưu tiên khi hay đi đêm — cần xem mẫu phim thực tế trên kính xe trước khi dán.`;
      return "Cần xem mẫu phim thực tế trên kính xe trước khi dán.";
    };
    const isCompatible = (pkg) => compatible.some((item) => item.id === pkg.id);
    const makeLane = (key, pkg, isPick) => {
      if (!pkg) return { key, title: labels.lane[key], pkg: null };
      const price = pkg.prices[state.group];
      const overBudget = Number.isFinite(max) && price > max;
      const locked = !isCompatible(pkg);
      const caution = cautionFor(pkg);
      const groupCode = state.group === "minicar" ? "MINI" : state.group.toUpperCase();
      const ws = windshieldCode(pkg).replace(/\s/g, "");
      const privacy = state.privacy === "high" ? "PH" : state.privacy === "balanced" ? "PB" : "PS";
      const roof = state.sunroof === "quote" ? "SRQ" : state.sunroof === "excluded" ? "SRX" : "SR0";
      const tagKey = pkg.level < displayRecommended.level ? "saving" : pkg.level > displayRecommended.level ? "upgrade" : "recommended";
      return { key, tagKey, title: labels.lane[key], pkg, overBudget, locked, caution, isPick: Boolean(isPick) && !locked, overBudgetAmount: overBudget ? price - max : 0, configId: `FM11-${groupCode}-${pkg.configCode}-${ws}-${privacy}-${roof}-${key[0].toUpperCase()}-R${revision}-${consultation.slice(-5)}` };
    };
    const laneKeys = ["saving", "recommended", "upgrade"];
    let windowPkgs;
    if (!vehicleChosen && !forceId) {
      // Chua chon xe: vi du mac dinh 3 goi re nhat trong so cac goi tuong thich (van ton trong bo loc dem/premium),
      // goi giua lam de xuat cho de hieu (thang tiet kiem / de xuat / nang cap).
      const examplePool = compatible.length ? compatible : packages;
      const byLevel = [...examplePool].sort((a, b) => a.level - b.level);
      windowPkgs = byLevel.slice(0, 3);
      if (windowPkgs.length < 3) {
        // Pool tuong thich khong du 3: bo sung goi khac lam the khoa de khach hieu vi sao bi loai.
        const used = new Set(windowPkgs.map((p) => p.id));
        const filler = [...packages].sort((a, b) => a.level - b.level).filter((p) => !used.has(p.id));
        while (windowPkgs.length < 3 && filler.length) windowPkgs.push(filler.shift());
        windowPkgs.sort((a, b) => a.level - b.level);
      }
      displayRecommended = windowPkgs.filter((p) => compatible.some((c) => c.id === p.id))[1] || windowPkgs.find((p) => compatible.some((c) => c.id === p.id)) || recommended;
    } else {
      // Uu tien goi trong ngan sach va gan ngan sach nhat; khong tu y bo goi re nhat khoi so sanh.
      // Chi lay trong pool tuong thich (compatible) — khong dung "packages" tho lam nguon chinh nua.
      const pool = compatible.length ? compatible : packages;
      const pickNear = (levelCmp, preferHighPrice) => {
        const side = pool.filter((p) => p.id !== recommended.id && levelCmp(p.level, recommended.level));
        if (!side.length) return null;
        const inBudget = side.filter((p) => p.prices[state.group] <= max);
        if (inBudget.length) {
          return [...inBudget].sort((a, b) => preferHighPrice
            ? b.prices[state.group] - a.prices[state.group]
            : a.prices[state.group] - b.prices[state.group])[0];
        }
        // Khong co gia nao o phia nay nam trong ngan sach -> luon lay gia gan tran nhat (re nhat trong nhom vuot).
        return [...side].sort((a, b) => a.prices[state.group] - b.prices[state.group])[0];
      };
      let saving = pickNear((l, r) => l < r, true);
      let upgrade = pickNear((l, r) => l > r, false);
      windowPkgs = [saving, recommended, upgrade].filter(Boolean);
      if (windowPkgs.length < 3) {
        // Pool tuong thich khong du 3 muc gia (vd premium + di dem). Lap day bang goi KHONG tuong thich —
        // cac the nay se tu dong bi khoa (locked) trong makeLane vi khong nam trong "compatible".
        const used = new Set(windowPkgs.map((p) => p.id));
        const filler = [...packages].sort((a, b) => a.level - b.level).filter((p) => !used.has(p.id));
        while (windowPkgs.length < 3 && filler.length) windowPkgs.push(filler.shift());
        windowPkgs.sort((a, b) => a.level - b.level);
      }
    }
    const noBudgetFit = Number.isFinite(max) && available.length === 0;
    // Ngoai ngan sach: khong goi goi vuot tien la "de xuat" — danh dau goi GAN ngan sach nhat de so sanh.
    if (noBudgetFit && nearest && windowPkgs.some((p) => p.id === nearest.id)) displayRecommended = nearest;
    const lanes = windowPkgs.map((pkg, i) => makeLane(laneKeys[i], pkg, pkg.id === displayRecommended.id));
    return { lanes, nearest, noBudgetFit };
  }

  function showAdvisorError(message) {
    advisorError.textContent = message;
    advisorError.hidden = false;
  }


  const laneTagClass = { saving: "fm-card--save", recommended: "fm-card--main", upgrade: "fm-card--premium" };
  const laneTagText = { saving: "TIẾT KIỆM", recommended: "ĐỀ XUẤT", upgrade: "NÂNG CẤP" };

  function resultCard(lane) {
    if (!lane.pkg) return `<article class="fm-card fm-card--empty"><span class="fm-tag">${escapeHtml(laneTagText[lane.key] || "")}</span><h4>Chưa có thêm phương án</h4><p class="fm-empty-note">Không có thêm gói phù hợp với các lựa chọn hiện tại ở cột này.</p></article>`;
    const price = lane.pkg.prices[state.group];
    const selected = selectedConfigId === lane.configId;
    const hasSunroofSurcharge = state.sunroof !== "none";
    const sunroofFlag = state.sunroof === "quote" ? '<p class="fm-quote-flag">Cần xác nhận phụ phí cửa sổ trời.</p>' : "";
    const overBudgetLabel = lane.overBudget ? `<span class="fm-badge fm-badge--over" title="Cao hơn ngân sách đã chọn ${formatPrice(lane.overBudgetAmount)}">+${formatPrice(lane.overBudgetAmount)}</span>` : "";
    const cautionFlag = lane.caution ? `<p class="fm-quote-flag">${escapeHtml(lane.caution)}</p>` : "";
    return `<article class="fm-card ${laneTagClass[lane.tagKey || lane.key]} ${selected ? "fm-card--selected" : ""}" data-card-lane="${lane.key}">
      <div class="fm-card-top"><span class="fm-tag">${escapeHtml(laneTagText[lane.tagKey || lane.key])}</span><span class="fm-card-badges">${lane.isPick ? `<span class="fm-badge">${latestResult?.noBudgetFit ? "Gần ngân sách nhất" : "Theo lựa chọn hiện tại"}</span>` : ""}${overBudgetLabel}</span></div>
      <h4>${escapeHtml(lane.pkg.fullName)}</h4>
      <p class="fm-price">${hasSunroofSurcharge ? '<span class="fm-price-pre">Giá cơ bản · chưa gồm cửa sổ trời</span>' : ""}${formatDong(price)}</p>
      <div class="fm-info"><p><b>Kính lái:</b> ${escapeHtml(windshieldCode(lane.pkg))}</p><p><b>Sườn/lưng:</b> ${escapeHtml(bodyCodes(lane.pkg))}</p></div>
      ${sunroofFlag}${cautionFlag}
      <div class="fm-note"><b>Điểm cân nhắc</b><p>${escapeHtml(lane.pkg.tradeoff)}</p></div>
      <button class="fm-choose ${selected ? "fm-choose--on" : ""}" type="button" data-choose="${lane.key}">${selected ? "Đã chọn cấu hình" : `Chọn ${escapeHtml(lane.pkg.fullName)}`}</button>
    </article>`;
  }

  function sunroofText() {
    if (state.sunroof === "excluded") return "Có, chưa tính trong giá";
    if (state.sunroof === "quote") return "Có, cần báo giá";
    return "Không có";
  }

  function leadConfigText() {
    if (leadOverridePkg && !selectedLane) {
      const pkg = leadOverridePkg;
      const caution = packageCaution(pkg);
      const cautionSuffix = caution ? ` | Lưu ý: ${caution}` : "";
      if (!vehicleChosen) return `${pkg.fullName} | Kính lái: ${pkg.windshield} | Sườn & lưng: ${pkg.body} | Giá theo model xe sẽ được xác nhận sau khi anh/chị điền thông tin xe.${cautionSuffix}`;
      return `${pkg.fullName} | Kính lái: ${pkg.windshield} | Sườn & lưng: ${pkg.body} | Giá tham khảo (${labels.group[state.group]}): ${formatDong(pkg.prices[state.group])}${cautionSuffix}`;
    }
    const lane = selectedLane?.pkg ? selectedLane : null;
    if (!lane) return "Chưa chọn phương án — bấm vào một thẻ phía trên để lấy cấu hình.";
    return `${lane.pkg.fullName} | Kính lái: ${windshieldCode(lane.pkg)} | Sườn & lưng: ${bodyCodes(lane.pkg)} | Cửa sổ trời: ${sunroofText()}`;
  }

  function leadMarkup() {
    if (leadClosed) return "";
    return `<div class="lead-shell" id="lead-form">
      <h3 id="lead-form-title" tabindex="-1">Nhận tư vấn theo xe của bạn</h3>
      <p class="lead-sub">Chưa rõ hãng, model hay cấu hình cũng để lại thông tin được — nhân viên tư vấn sẽ gọi lại xác nhận xe, mã phim theo từng kính và giá trước khi thi công.</p>
      <form id="standalone-lead-form" novalidate aria-describedby="zalo-handoff-note">
        <div class="lead-grid lead-grid--two">
          <label>Họ và tên <span class="lead-req">*</span><input name="name" autocomplete="name" placeholder="Nguyễn Văn A" required aria-required="true" aria-describedby="standalone-form-message" /></label>
          <label>Số điện thoại <span class="lead-req">*</span><input name="phone" autocomplete="tel" inputmode="tel" placeholder="0xxx xxx xxx" required aria-required="true" aria-describedby="standalone-form-message" /></label>
        </div>
        <div class="lead-grid lead-grid--two">
          <label>Dòng xe <span class="lead-req">*</span><input name="vehicle" placeholder="VD: Ford Ranger, VF5, CX-5 — chưa rõ cũng được" required aria-required="true" aria-describedby="standalone-form-message" /></label>
          <label>Tỉnh/thành<input name="province" placeholder="TP. Hồ Chí Minh (không bắt buộc)" /></label>
        </div>
        <label class="lead-config">Cấu hình đang chọn<input name="config" readonly value="${escapeHtml(leadConfigText())}" /></label>
        <input name="form-honey" tabindex="-1" autocomplete="off" aria-hidden="true" style="display:none" />
        <div id="standalone-form-message" class="form-message" hidden role="status" aria-live="polite"></div>
        <label class="lead-consent"><input name="consent" type="checkbox" required aria-required="true" /><span>Tôi đồng ý để Auto365 sử dụng thông tin này để liên hệ tư vấn theo <a href="https://auto365.vn/chinh-sach-bao-mat-tai-auto365" target="_blank" rel="noopener noreferrer">Chính sách bảo mật</a>.</span></label>
        <div class="lead-actions">
          <button class="button button--primary" type="submit">${leadTransportConfigured() ? "Gửi thông tin tư vấn" : "Mở Zalo gửi cấu hình"}</button>
          <button class="button button--outline" type="button" data-close-lead>Đóng</button>
        </div>
        <p class="privacy-note" id="zalo-handoff-note">${leadTransportConfigured() ? "Thông tin được gửi khi anh/chị chủ động bấm “Gửi thông tin tư vấn” để Auto365 liên hệ xác nhận cấu hình và báo giá theo xe." : "Hệ thống chưa nhận lead trực tiếp — bấm nút để mở Zalo với nội dung đã điền sẵn, Auto365 liên hệ xác nhận cấu hình và báo giá theo xe."}</p>
        <label class="share-summary-label" hidden>Nội dung đã chuẩn bị<textarea class="share-summary" rows="8" readonly></textarea></label>
      </form>
    </div>`;
  }

  function renderResult() {
    shell.querySelector(".result-area")?.remove();
    if (!hasResult || !latestResult) return;
    const area = document.createElement("div");
    area.className = "result-area";
    area.id = "ket-qua";
    const resultCount = latestResult.lanes.filter((lane) => lane.pkg).length;
    const cardsHtml = `<div class="fm-cards">${latestResult.lanes.map(resultCard).join("")}</div>`;
    let body;
    if (latestResult.noBudgetFit) {
      const nearestPrice = latestResult.nearest ? latestResult.nearest.prices[state.group] : null;
      const delta = Number.isFinite(nearestPrice) ? nearestPrice - budgetMaximum[state.budget] : null;
      const banner = `<div class="no-fit" role="status"><div class="no-fit__icon">!</div><div><h4>Chưa có gói trọn xe nằm trong ngân sách này.</h4><p>Gói gần ngân sách nhất là <strong>${escapeHtml(latestResult.nearest?.fullName || "")}</strong>${Number.isFinite(nearestPrice) ? ` — ${formatDong(nearestPrice)}` : ""}${Number.isFinite(delta) ? `, cao hơn trần hiện tại ${formatPrice(delta)}` : ""}. Ba phương án bên dưới vẫn hiển thị để so sánh, kèm mức chênh so với ngân sách.</p><div class="inline-actions"><button class="button button--dark" type="button" data-open-budget>Mở ngân sách để so sánh</button><button class="button button--outline" type="button" data-partial-zalo>Hỏi giá riêng kính lái</button></div></div></div>`;
      body = banner + cardsHtml;
    } else {
      body = cardsHtml;
    }
    const chosenLane = selectedLane?.pkg ? selectedLane : null;
    const activeLane = chosenLane ? chosenLane.key : (latestResult.lanes.find((lane) => lane.isPick)?.key || "recommended");
    const previewNote = "";
    area.innerHTML = `<div class="fm-panel">
      <div class="fm-head">
        <div class="fm-head-copy">
          <p class="fm-eyebrow">${chosenLane ? `PHƯƠNG ÁN ĐÃ CHỌN${vehicleChosen ? ` CHO ${escapeHtml(vehicleLabel().toUpperCase())}` : ""}` : latestResult.noBudgetFit ? `CÁC PHƯƠNG ÁN ĐỂ SO SÁNH${vehicleChosen ? ` — ${escapeHtml(vehicleLabel().toUpperCase())}` : ""}` : vehicleChosen ? `PHƯƠNG ÁN PHÙ HỢP VỚI ${escapeHtml(vehicleLabel().toUpperCase())}` : "VÍ DỤ CẤU HÌNH MẶC ĐỊNH — GIÁ THEO NHÓM MINICAR"}</p>
          <h3 class="fm-heading">${chosenLane ? `${escapeHtml(chosenLane.pkg.fullName)} — ${formatDong(chosenLane.pkg.prices[state.group])}` : latestResult.noBudgetFit ? "Chưa có gói trong ngân sách — so sánh phương án gần nhất" : "Cấu hình phim để tham khảo"}</h3>
          <p class="fm-meta">${escapeHtml(vehicleLabel())} • ${escapeHtml(labels.need[state.need])} • ${escapeHtml(labels.budget[state.budget])}</p>
          ${chosenLane ? `<p class="fm-desc">${escapeHtml(chosenLane.pkg.positioning)}: kính lái ${escapeHtml(windshieldCode(chosenLane.pkg))}, sườn và lưng ${escapeHtml(bodyCodes(chosenLane.pkg))}. ${escapeHtml(reasonFor(chosenLane.pkg))}</p>` : ""}
          ${previewNote}
        </div>
        <div class="fm-head-actions">
          <a class="fm-btn fm-btn--primary" href="tel:${PHONE}">☎ Gọi tư vấn</a>
          <button class="fm-btn fm-btn--outline" type="button" data-zalo-lane="${activeLane}">💬 Chat Zalo</button>
          <button class="fm-btn fm-btn--outline" type="button" data-go-lead>📝 Nhận tư vấn</button>
        </div>
      </div>
      ${body}
    </div>${leadMarkup()}<p class="result-footnote">Kết quả dùng để tham khảo trước khi kiểm tra xe. Nhân viên tư vấn sẽ xác nhận kính nguyên bản, mã phim và giá theo xe trước khi thi công.</p>`;
    shell.insertBefore(area, mobileBar);
    bindResultEvents(area);
    resultStatus.textContent = chosenLane
      ? `Đã chọn ${chosenLane.pkg.fullName}, giá ${formatDong(chosenLane.pkg.prices[state.group])}.`
      : resultCount
        ? `Đã tạo ${resultCount} phương án so sánh cho ${vehicleLabel()}.`
        : `Chưa có gói trọn xe phù hợp ngân sách cho ${vehicleLabel()}.`;
  }

  function bindResultEvents(area) {
    area.querySelectorAll(".fm-card").forEach((card) => {
      const chooseButton = card.querySelector("[data-choose]");
      if (!chooseButton) return;
      card.addEventListener("click", (event) => {
        if (event.target.closest("a, button")) return;
        if (String(window.getSelection())) return;
        chooseButton.click();
      });
    });
    area.querySelectorAll("[data-choose]").forEach((button) => button.addEventListener("click", () => {
      const lane = latestResult.lanes.find((item) => item.key === button.dataset.choose);
      if (!lane?.pkg) return;
      selectedConfigId = lane.configId;
      selectedLane = lane;
      leadOverridePkg = null;
      leadClosed = false;
      track("select_package", {
        package_id: lane.pkg.id,
        configuration_id: lane.configId,
        price: lane.pkg.prices[state.group],
        vehicle_group: state.group,
        lane: lane.key,
      });
      renderResult();
    }));
    area.querySelectorAll("[data-zalo-lane]").forEach((button) => button.addEventListener("click", () => {
      const lane = latestResult.lanes.find((item) => item.key === button.dataset.zaloLane);
      openZalo(lane);
    }));
    area.querySelector("[data-open-budget]")?.addEventListener("click", () => {
      state.budget = "open";
      budgetSelect.value = "open";
      revision += 1;
      renderCurrentSummary();
      latestResult = selectLanes();
      hasResult = true;
      renderResult();
    });
    area.querySelector("[data-partial-zalo]")?.addEventListener("click", () => openZalo(null, "partial"));
    area.querySelector("[data-go-lead]")?.addEventListener("click", () => {
      leadClosed = false;
      renderResult();
      setTimeout(() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" }), 40);
    });
    const form = area.querySelector("#standalone-lead-form");
    if (form) {
      const f = form.elements;
      f.name.value = leadDraft.name;
      f.phone.value = leadDraft.phone;
      f.vehicle.value = leadDraft.vehicle || (vehicleChosen ? vehicleLabel() : "");
      f.province.value = leadDraft.province;
      const capture = () => {
        leadDraft.name = f.name.value;
        leadDraft.phone = f.phone.value;
        leadDraft.vehicle = f.vehicle.value;
        leadDraft.province = f.province.value;
      };
      form.addEventListener("input", capture);
      form.addEventListener("change", capture);
      form.addEventListener("focusin", () => mobileBar.classList.add("mobile-conversion-bar--hidden"));
      form.addEventListener("focusout", () => setTimeout(updateStickyBar, 0));
      form.addEventListener("submit", submitStandaloneForm);
      form.querySelector("[data-close-lead]")?.addEventListener("click", () => { leadClosed = true; renderResult(); setTimeout(() => { (shell.querySelector(".result-area [data-go-lead]") || shell.querySelector(".result-area .fm-choose"))?.focus(); }, 40); });
    }
  }

  function normalizePhone(raw) {
    const compact = raw.replace(/[^+\d]/g, "");
    if (compact.startsWith("+84")) return `0${compact.slice(3)}`;
    if (compact.startsWith("84") && compact.length === 11) return `0${compact.slice(2)}`;
    return compact.replace(/\D/g, "");
  }

  function summaryText(lane = selectedLane, request = "general", person = null) {
    const base = [];
    if (person) {
      base.push(`Họ tên: ${person.name}.`);
      base.push(`Điện thoại: ${person.phone}.`);
      if (person.vehicle) base.push(`Xe: ${person.vehicle}.`);
      if (person.province) base.push(`Khu vực: ${person.province}.`);
    }
    if (!lane?.pkg || !state.group) {
      base.push(request === "partial" ? "Tôi cần báo giá riêng kính lái 3M." : "Tôi cần tư vấn phim cách nhiệt 3M.");
      base.push(`${vehicleLabel()}${state.group ? ` · ${labels.group[state.group]}` : ""}.`);
      base.push(`Nhu cầu: ${labels.need[state.need]}.`);
      base.push(`Ngân sách: ${labels.budget[state.budget]}.`);
      
      return base.join("\n");
    }
    base.push(`Tôi muốn Auto365 xác nhận cấu hình ${lane.pkg.fullName}.`);
    base.push(`${vehicleLabel()} · ${labels.group[state.group]}.`);
    base.push(`Nhu cầu: ${labels.need[state.need]}.`);
    base.push(`Ngân sách: ${labels.budget[state.budget]}.`);
    base.push(`${lane.pkg.fullName} · ${formatDong(lane.pkg.prices[state.group])}.`);
    base.push(`Kính lái: ${windshieldCode(lane.pkg)}.`);
    base.push(`Sườn/lưng: ${bodyCodes(lane.pkg)}.`);
    base.push(state.sunroof === "quote" ? "Cửa sổ trời: cần báo giá riêng." : state.sunroof === "excluded" ? "Giá chưa gồm cửa sổ trời." : "Xe không có cửa sổ trời.");
    return base.join("\n");
  }

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      try { await navigator.clipboard.writeText(text); return true; } catch {}
    }
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.className = "clipboard-probe";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  }

  function toast(message) {
    document.querySelector(".copy-toast")?.remove();
    const node = document.createElement("p");
    node.className = "copy-toast";
    node.setAttribute("role", "status");
    node.textContent = message;
    document.body.appendChild(node);
    setTimeout(() => node.remove(), 5200);
  }

  function openExternal(url) {
    const popup = window.open("", "_blank");
    if (!popup) return false;
    popup.opener = null;
    popup.location.replace(url);
    return true;
  }

  function showZaloFallback(text) {
    let fallback = document.getElementById("zalo-manual-fallback");
    if (!fallback) {
      fallback = document.createElement("div");
      fallback.id = "zalo-manual-fallback";
      fallback.className = "zalo-fallback";
      fallback.setAttribute("role", "status");
      fallback.innerHTML = `<strong>Không thể tự mở Zalo hoặc sao chép nội dung</strong><p>Nội dung vẫn được giữ bên dưới. Anh/chị có thể sao chép thủ công rồi mở Zalo.</p><textarea rows="7" readonly aria-label="Nội dung cấu hình để gửi Zalo"></textarea><div class="zalo-fallback__actions"><a href="${ZALO_URL}" target="_blank" rel="noopener noreferrer">Mở Zalo thủ công</a></div>`;
      disclosure.insertAdjacentElement("afterend", fallback);
    }
    fallback.querySelector("textarea").value = text;
    fallback.hidden = false;
    fallback.scrollIntoView({ behavior: "smooth", block: "center" });
    fallback.querySelector("textarea").focus();
  }

  async function openZalo(lane = selectedLane, request = "general") {
    const text = summaryText(lane, request);
    const copyAttempt = copyText(text);
    const opened = openExternal(ZALO_URL);
    const copied = await copyAttempt;
    track("click_zalo", { configuration_id: lane?.configId || null, package_id: lane?.pkg?.id || null });
    toast(copied ? "Đã sao chép cấu hình. Hãy dán vào khung chat Zalo để gửi." : "Không thể tự sao chép. Anh/chị có thể sao chép nội dung cấu hình bên dưới và gửi qua Zalo.");
    if (!opened) toast("Trình duyệt đã chặn cửa sổ Zalo. Cấu hình vẫn được giữ để anh/chị mở Zalo thủ công.");
    if (!opened || !copied) showZaloFallback(text);
  }

  function currentUtmContext() {
    const params = new URLSearchParams(window.location.search || "");
    return {
      utm_source: params.get("utm_source") || null,
      utm_medium: params.get("utm_medium") || null,
      utm_campaign: params.get("utm_campaign") || null,
      utm_content: params.get("utm_content") || null,
      utm_term: params.get("utm_term") || null
    };
  }

  // Webhook lead nội bộ auto365.vn — cùng endpoint với form tư vấn trên các money page.
  const DEFAULT_LEAD_ENDPOINT = "/api/leads";

  function configuredLeadEndpoint() {
    const globalEndpoint = typeof window.AUTO365_FILMMATCH_LEAD_ENDPOINT === "string" ? window.AUTO365_FILMMATCH_LEAD_ENDPOINT.trim() : "";
    const metaEndpoint = document.querySelector('meta[name="auto365-filmmatch-lead-endpoint"]')?.content?.trim() || "";
    return globalEndpoint || metaEndpoint || DEFAULT_LEAD_ENDPOINT;
  }

  function leadTransportConfigured() {
    return typeof window.AUTO365_FILMMATCH_LEAD_SUBMIT === "function" || Boolean(configuredLeadEndpoint());
  }

  function buildLeadPayload({ name, phone, vehicle, province, honeypot, note }) {
    const lane = selectedLane?.pkg ? selectedLane : null;
    const pkg = lane?.pkg || leadOverridePkg || null;
    const price = pkg && state.group ? pkg.prices[state.group] ?? null : null;
    const leadId = globalThis.crypto?.randomUUID?.() || `FMLEAD-${Date.now()}-${consultation.slice(-5)}`;
    return {
      lead_id: leadId,
      honeypot: honeypot || "",
      note: note || "",
      source: "filmmatch_3m_pillar",
      cta: "filmmatch_lead_form",
      submitted_at: new Date().toISOString(),
      consultation_id: consultation,
      revision,
      price_version: PRICE_VERSION,
      customer: {
        name,
        phone,
        province: province || null
      },
      vehicle: {
        text: vehicle || null,
        group: state.group || null,
        group_confirmed: vehicleChosen
      },
      filmmatch: {
        vehicle_brand: state.brand || null,
        vehicle_model: state.model || null,
        vehicle_group: state.group || null,
        need: state.need,
        budget: state.budget,
        night_frequency: state.nightFrequency,
        windshield_preference: state.windshield,
        rear_privacy: state.privacy,
        sunroof: state.sunroof
      },
      selection: {
        lane: lane?.key || (pkg ? "manual_package" : null),
        configuration_id: lane?.configId || null,
        package_id: pkg?.id || null,
        package_name: pkg?.fullName || null,
        price,
        windshield_code: pkg ? windshieldCode(pkg) : null,
        body_codes: pkg ? bodyCodes(pkg) : null,
        over_budget: Boolean(lane?.overBudget),
        over_budget_amount: lane?.overBudgetAmount || 0
      },
      source_page: {
        url: window.location.href,
        path: window.location.pathname,
        referrer: document.referrer || null,
        ...currentUtmContext()
      }
    };
  }

  // Hop dong xac nhan lead: server/handler PHAI tra { success: true, lead_id: "..." } thi moi coi la da luu.
  function confirmLeadResult(result) {
    if (!result || typeof result !== "object") return null;
    if (result.success !== true) return null;
    if (typeof result.lead_id !== "string" || !result.lead_id.trim()) return null;
    return result;
  }

  async function submitLeadPayload(payload) {
    if (typeof window.AUTO365_FILMMATCH_LEAD_SUBMIT === "function") {
      const raw = await window.AUTO365_FILMMATCH_LEAD_SUBMIT(payload);
      const confirmed = confirmLeadResult(raw);
      if (!confirmed) throw new Error("Lead handler did not confirm {success:true, lead_id}");
      return { ok: true, channel: "handler", result: confirmed };
    }
    const endpoint = configuredLeadEndpoint();
    if (!endpoint) return { ok: false, unavailable: true, channel: "none" };
    // Timeout 12s: qua han thi coi nhu chua gui duoc va roi ve fallback Zalo.
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    let response;
    try {
      response = await fetch(endpoint, {
        method: "POST",
        body: leadFormData(payload),
        keepalive: true,
        signal: controller.signal,
        headers: { "Idempotency-Key": payload.lead_id }
      });
    } finally {
      clearTimeout(timer);
    }
    if (!response.ok) throw new Error(`Lead submission returned ${response.status}`);
    const result = await response.json().catch(() => null);
    const confirmed = confirmLeadResult(result);
    if (!confirmed) throw new Error("Lead endpoint did not confirm {success:true, lead_id}");
    return { ok: true, channel: "endpoint", result: confirmed };
  }

  // Ánh xạ payload sang đúng bộ field mà webhook /api/leads của auto365.vn đang nhận.
  function leadFormData(payload) {
    const data = new FormData();
    data.append("form-honey", payload.honeypot || "");
    data.append("fullname", payload.customer.name);
    data.append("phone", payload.customer.phone);
    data.append("car_model", payload.vehicle.text || "Chưa xác định");
    data.append("priority", labels.need[payload.filmmatch.need] || "");
    data.append("service", "Phim cách nhiệt 3M");
    data.append("source_page", "Pillar 3M V11.12");
    data.append("source_url", payload.source_page.url);
    data.append("referrer", payload.source_page.referrer || "");
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => data.append(key, payload.source_page[key] || ""));
    // Dữ liệu FilmMatch bổ sung để cố vấn không phải hỏi lại.
    data.append("lead_id", payload.lead_id);
    data.append("configuration_id", payload.selection.configuration_id || "");
    data.append("package_name", payload.selection.package_name || "");
    // Chỉ gửi giá/nhóm xe khi khách thực sự chọn xe; nếu không, để cố vấn xác nhận theo model.
    data.append("package_price", payload.vehicle.group_confirmed ? (payload.selection.price ?? "") : "");
    data.append("vehicle_group", payload.vehicle.group_confirmed ? (payload.vehicle.group || "") : "");
    if (!payload.vehicle.group_confirmed) data.append("price_status", "Chưa xác định nhóm xe — cần cố vấn xác nhận giá theo model");
    data.append("province", payload.customer.province || "");
    data.append("note", payload.note || "");
    return data;
  }

  async function submitStandaloneForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const message = form.querySelector("#standalone-form-message");
    const submitButton = form.querySelector('button[type="submit"]');
    const name = form.elements.name.value.trim();
    const phone = normalizePhone(form.elements.phone.value);
    message.hidden = false;
    message.className = "form-message form-message--error";
    form.querySelectorAll("[aria-invalid=true]").forEach((field) => field.removeAttribute("aria-invalid"));
    const invalidate = (field, copy) => { message.innerHTML = copy; field.setAttribute("aria-invalid", "true"); field.focus(); };
    const vehicle = form.elements.vehicle.value.trim();
    const province = form.elements.province.value.trim();
    const consent = form.elements.consent.checked;
    if (!name) { invalidate(form.elements.name, "<strong>Thiếu họ tên</strong><p>Vui lòng nhập họ tên.</p>"); return; }
    if (!/^0(3|5|7|8|9)\d{8}$/.test(phone)) { invalidate(form.elements.phone, "<strong>Số điện thoại chưa đúng</strong><p>Ví dụ: 0365 365 365.</p>"); return; }
    if (!vehicle) { invalidate(form.elements.vehicle, "<strong>Thiếu thông tin xe</strong><p>Nhập dòng xe — ghi “chưa rõ” nếu chưa xác định cũng được.</p>"); return; }
    if (!consent) { invalidate(form.elements.consent, "<strong>Cần xác nhận đồng ý</strong><p>Vui lòng xác nhận để Auto365 có thể sử dụng thông tin này cho việc liên hệ tư vấn.</p>"); return; }
    const lastSubmit = Number(localStorage.getItem("last_submit_time") || 0);
    const waitLeft = lastSubmit ? Math.ceil((60000 - (Date.now() - lastSubmit)) / 1000) : 0;
    if (waitLeft > 0) { message.innerHTML = `<strong>Anh/chị vừa gửi thông tin</strong><p>Vui lòng đợi ${waitLeft} giây để gửi lại, hoặc gọi ngay 0365 365 365.</p>`; return; }

    const text = (!selectedLane && leadOverridePkg)
      ? [`Họ tên: ${name}.`, `Điện thoại: ${phone}.`, `Xe: ${vehicle}.`, province ? `Khu vực: ${province}.` : "", `Tôi muốn nhận báo giá gói ${leadOverridePkg.fullName}.`, `Cấu hình: ${leadConfigText()}.`].filter(Boolean).join("\n")
      : summaryText(selectedLane, "general", { name, phone, vehicle, province });
    const payload = buildLeadPayload({ name, phone, vehicle, province, honeypot: form.elements["form-honey"]?.value || "", note: text });
    const configurationId = selectedLane?.configId || null;
    const packageId = selectedLane?.pkg?.id || leadOverridePkg?.id || null;
    const summaryLabel = form.querySelector(".share-summary-label");
    const summaryArea = form.querySelector(".share-summary");
    summaryArea.value = text;

    if (!leadTransportConfigured()) {
      const copyAttempt = copyText(text);
      const zaloOpened = openExternal(ZALO_URL);
      const copied = await copyAttempt;
      summaryLabel.hidden = false;
      message.className = "form-message form-message--error";
      message.innerHTML = `<strong>Chưa gửi được trực tiếp</strong><p>${copied ? "Nội dung tư vấn đã được sao chép để anh/chị gửi qua Zalo." : "Nội dung tư vấn được giữ ở ô bên dưới để anh/chị sao chép."}</p><p><a href="${ZALO_URL}" target="_blank" rel="noopener noreferrer">Mở Zalo</a></p>`;
      if (!zaloOpened) message.innerHTML += "<p>Trình duyệt đã chặn cửa sổ Zalo; nội dung vẫn được giữ trong ô bên dưới.</p>";
      track("lead_submit_fallback", { configuration_id: configurationId, package_id: packageId, reason: "not_configured" });
      return;
    }

    const originalLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Đang gửi...";
    try {
      const result = await submitLeadPayload(payload);
      if (!result.ok) throw new Error("Lead transport unavailable");
      localStorage.setItem("last_submit_time", String(Date.now()));
      message.className = "form-message form-message--success";
      message.innerHTML = `<strong>Đã gửi thông tin tư vấn</strong><p>Auto365 đã tiếp nhận thông tin và sẽ liên hệ với anh/chị sớm nhất${configurationId ? ` — mã cấu hình <strong>${escapeHtml(configurationId)}</strong>` : ""}.</p>`;
      submitButton.textContent = "Đã gửi";
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "lead_form_submit", form_source: "pillar-3m-v11-12", service: "Phim cách nhiệt 3M", lead_id: payload.lead_id, package_id: packageId, configuration_id: configurationId });
      track("lead_submit_success", { configuration_id: configurationId, package_id: packageId, channel: result.channel });
    } catch (error) {
      const copied = await copyText(text);
      summaryLabel.hidden = false;
      message.className = "form-message form-message--error";
      message.innerHTML = `<strong>Chưa gửi được lúc này</strong><p>${copied ? "Cấu hình đã được sao chép." : "Cấu hình được giữ ở ô bên dưới."} Anh/chị có thể gửi qua Zalo để Auto365 tiếp nhận yêu cầu tư vấn.</p><p><a href="${ZALO_URL}" target="_blank" rel="noopener noreferrer">Mở Zalo</a></p>`;
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
      track("lead_submit_error", { configuration_id: configurationId, package_id: packageId, reason: classifyErrorReason(error) });
    }
  }

  function refreshVehicle(useTypeFallback) {
    renderVehicleSelector(useTypeFallback);
    revision += 1;
    refreshResult();
    advisorError.hidden = true;
    renderCurrentSummary();
  }

  brandSelect.addEventListener("change", () => {
    state.brand = brandSelect.value;
    typeFallback.checked = !state.brand;
    refreshVehicle(!state.brand);
    track("filmmatch_start", { changed_field: "brand" });
  });
  typeFallback.addEventListener("change", () => {
    if (typeFallback.checked) {
      state.brand = "";
      state.model = "";
      brandSelect.value = "";
      leadDraft.vehicle = "";
    } else if (!state.brand) {
      typeFallback.checked = true;
    }
    refreshVehicle(true);
    track("filmmatch_start", { changed_field: "vehicle_type_fallback" });
  });
  modelSelect.addEventListener("change", () => {
    syncModelState();
    revision += 1;
    refreshResult();
    advisorError.hidden = true;
    renderCurrentSummary();
    track("filmmatch_start", { changed_field: "model" });
  });
  needSelect.addEventListener("change", () => mutate({ need: needSelect.value }));
  budgetSelect.addEventListener("change", () => mutate({ budget: budgetSelect.value }));
  nightSelect.addEventListener("change", () => mutate({ nightFrequency: nightSelect.value }));
  windshieldSelect.addEventListener("change", () => mutate({ windshield: windshieldSelect.value }));
  privacySelect.addEventListener("change", () => mutate({ privacy: privacySelect.value }));
  sunroofSelect.addEventListener("change", () => mutate({ sunroof: sunroofSelect.value }));

  document.querySelectorAll(".open-quote").forEach((button) => button.addEventListener("click", () => {
    document.getElementById("filmmatch")?.scrollIntoView({ behavior: "smooth", block: "start" });
    modelSelect.focus();
  }));

  document.addEventListener("click", (event) => {
    const target = event.target.closest?.("[data-track]");
    if (target) track(target.dataset.track || "cta_click", { label: target.textContent.trim().slice(0, 100), destination: target.getAttribute("href") || "" });
  });

  let heroVisible = true;
  function updateStickyBar() {
    if (!mobileBar) return;
    const formFocused = document.getElementById("standalone-lead-form")?.contains(document.activeElement);
    const hidden = heroVisible || Boolean(formFocused);
    mobileBar.classList.toggle("mobile-conversion-bar--hidden", hidden);
    mobileBar.setAttribute("aria-hidden", String(hidden));
    mobileBar.inert = hidden;
    const primary = mobileBar.querySelector(".mobile-conversion-bar__primary");
    const hasConfig = Boolean(selectedLane || leadOverridePkg);
    if (primary) {
      primary.href = hasConfig && !leadClosed ? "#lead-form" : hasConfig ? "#ket-qua" : "#filmmatch";
      primary.textContent = hasConfig ? (leadClosed ? "Mở báo giá" : "Gửi cấu hình") : "Chọn phim";
    }
  }
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; updateStickyBar(); }, { threshold: 0.08 });
    observer.observe(document.querySelector(".hero"));
  } else {
    heroVisible = false;
    updateStickyBar();
  }
  document.getElementById("hero-video-trigger")?.addEventListener("click", function heroVideoPlay() {
    const btn = this;
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/N-hSgRJJkVg?autoplay=1&rel=0";
    iframe.title = "Video giới thiệu 3M Pro Shop Auto365";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
    track("hero_video_play");
  });
  mobileBar?.querySelector("a[href^='tel:']")?.addEventListener("click", () => track("click_call"));
  mobileBar?.querySelector("button")?.addEventListener("click", () => openZalo());
  mobileBar?.querySelector(".mobile-conversion-bar__primary")?.addEventListener("click", (event) => {
    if (!(selectedLane || leadOverridePkg) || !leadClosed) return;
    event.preventDefault();
    leadClosed = false;
    renderResult();
    setTimeout(() => {
      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
      document.getElementById("lead-form-title")?.focus();
    }, 40);
  });

  document.querySelectorAll("[data-quote-pkg]").forEach((quoteBtn) => quoteBtn.addEventListener("click", (event) => {
    const pkg = packages.find((item) => item.id === quoteBtn.dataset.quotePkg);
    if (!pkg) return;
    event.preventDefault();
    leadOverridePkg = pkg;
    selectedConfigId = null;
    selectedLane = null;
    leadClosed = false;
    if (!state.group) state.group = DEFAULT_GROUP;
    latestResult = selectLanes(pkg.id);
    hasResult = true;
    renderResult();
    setTimeout(() => {
      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
      document.getElementById("lead-form-title")?.focus();
    }, 40);
    track("quote_package", { package_id: pkg.id });
  }));

  // Bam vao bat ky dau tren the goi cung mo form tu van (tru link/nut co hanh vi rieng).
  document.querySelectorAll(".pkg-card").forEach((card) => {
    const quoteLink = card.querySelector("[data-quote-pkg]");
    if (!quoteLink) return;
    card.classList.add("pkg-card--clickable");
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      if (String(window.getSelection())) return;
      quoteLink.click();
    });
  });

  renderVehicleSelector(typeFallback.checked);
  renderCurrentSummary();
  refreshResult();
  updateStickyBar();
})();


(() => {
  "use strict";
  const grid = document.getElementById("fleet-grid");
  if (!grid) return;
  const cards = [...grid.querySelectorAll("article")];
  const buttons = [...document.querySelectorAll("[data-fleet-brand]")];
  const moreBtn = document.getElementById("fleet-more-btn");
  let brand = "all";
  let expanded = false;
  const track = (event, payload) => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event, ...payload }); };

  function apply() {
    cards.forEach(card => {
      const brandOk = brand === "all" || card.dataset.brand === brand;
      const extraOk = brand !== "all" || expanded || card.dataset.extra !== "1";
      card.hidden = !(brandOk && extraOk);
    });
    if (moreBtn) moreBtn.parentElement.hidden = brand !== "all" || expanded;
  }

  buttons.forEach(btn => btn.addEventListener("click", () => {
    brand = btn.dataset.fleetBrand;
    buttons.forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
    apply();
    track("fleet_filter", { brand });
  }));

  moreBtn?.addEventListener("click", () => {
    expanded = true;
    apply();
    cards.find(card => card.dataset.extra === "1")?.querySelector("a")?.focus();
    track("fleet_expand", {});
  });

  apply();

  const faqMore = document.getElementById("faq-more-btn");
  const faqExtra = [...document.querySelectorAll("#faq-list [data-faq-extra]")];
  if (faqMore && faqExtra.length) {
    faqExtra.forEach(item => { item.hidden = true; });
    faqMore.addEventListener("click", () => {
      faqExtra.forEach(item => { item.hidden = false; });
      faqMore.setAttribute("aria-expanded", "true");
      faqMore.parentElement.hidden = true;
      faqExtra[0]?.querySelector("summary")?.focus();
      track("faq_expand", {});
    });
  }
})();
