const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<div class="grid grid-2"><article class="case-card">');
const s2 = html.indexOf('</figcaption></figure></div></section>', s1);

if (s1 !== -1) {
    let block = html.substring(s1, s2 + 30);
    block = block.replace('<div class="grid grid-2">', '<div class="grid grid-3">');
    block = block.replace('</article></div><figure class="beam-evidence">', '</article><figure class="beam-evidence" style="margin:0; border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; background: #fff;">');
    
    // adjust the beam-photo to have similar aspect ratio to case-photo (aspect-ratio: 16/9)
    block = block.replace('class="beam-photo"', 'class="beam-photo" style="object-fit:cover; height:200px; width:100%;"');
    
    // Now move the closing div of grid-3 to AFTER the figure
    // Original: ...</article></div><figure>...</figure></div></section>
    // New block currently: ...</article><figure>...</figure></div></section> 
    // Wait, let's look at the original exact string:
    // `</article></div><figure class="beam-evidence"> ... </figcaption></figure></div></section>`
    // The `</div>` after `</article>` was closing `.grid-2`. 
    // The `</div>` after `</figure>` was closing `.wrap`.
    // So if I removed `</div>` before `<figure>`, I need to add it AFTER `</figure>`.
    block = block.replace('</figcaption></figure></div></section>', '</figcaption></figure></div></div></section>');
    
    html = html.substring(0, s1) + block + html.substring(s2 + 30);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("R14/case-thuc-te layout updated to 3 columns.");
} else {
    console.log("Not found.");
}
