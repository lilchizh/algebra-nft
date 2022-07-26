// Import stylesheets
// import keccak256 from './node_modules/keccak256/keccak256.js'

function generate() {
  const rnd = (Math.random() * (2 - 0 + 1)) << 0;

  const _keccak = keccak256(rnd).toString('hex')

  console.log(_keccak)

  // 0 - Triangle, 1 - Circle, 2 - Square
  const ms = [
    'M101.5 175L0.6 0.25L202.4 0.25L101.5 175Z',
    'M175 87.5C175 135.8 135.8 175 87.5 175C39.2 175 0 135.8 0 87.5C0 39.1751 39.2 0 87.5 0C135.8 0 175 39.2 175 87.5Z',
    'M0 0H175V175H0V0Z',
  ];

  const ss = [
    {
      p: 'M75.3585 0L84.2517 8.89323L8.89318 84.2518L-4.334e-05 75.3586L75.3585 0Z',
      w: 85,
      h: 85,
    },
    {
      p: 'M76.5141 41.507C73.822 46.1699 70.2378 50.2568 65.9663 53.5345C61.6947 56.8122 56.8194 59.2165 51.6186 60.61C46.4179 62.0035 40.9936 62.3591 35.6555 61.6563C30.3173 60.9535 25.1699 59.2062 20.507 56.5141C15.8442 53.822 11.7572 50.2378 8.47955 45.9663C5.20186 41.6947 2.79761 36.8193 1.40408 31.6186C0.0105474 26.4179 -0.344978 20.9936 0.357801 15.6555C1.06058 10.3173 2.8079 5.16989 5.5 0.507034L41.007 21.007L76.5141 41.507Z',
      w: 77,
      h: 63,
    },
    {
      p: 'M0 8.89323L8.89323 0L126.065 117.172L117.172 126.065L0 8.89323Z',
      w: 127,
      h: 127,
    },
    {
      p: 'M25.5 16L0 80H18L43 16H75V9H46L49.5 0H32L28.5 9H9V16H25.5Z',
      w: 75,
      h: 80,
    },
  ];

  const msc = [
    { x: 198, y: 205 },
    { x: 210, y: 185 },
    { x: 211, y: 185 },
  ];

  const mscs = [
    {
        p: 'M21 5C21 6.10457 16.9706 7 12 7C7.02944 7 3 6.10457 3 5C3 3.89543 7.02944 3 12 3C16.9706 3 21 3.89543 21 5Z',
        w: 18,
        x: 291
    },
    {
        p: 'M113 5C113 6.10457 88.3757 7 58 7C27.6243 7 3 6.10457 3 5C3 3.89543 27.6243 3 58 3C88.3757 3 113 3.89543 113 5Z',
        w: 110,
        x: 240
    },
    {
        p: 'M178 5C178 6.10457 138.825 7 90.5 7C42.1751 7 3 6.10457 3 5C3 3.89543 42.1751 3 90.5 3C138.825 3 178 3.89543 178 5Z',
        w: 175,
        x: 207
    }
  ]
  

  const spheres = [
    { x: 234, y: 142 },
    { x: 160, y: 313 },
    { x: 400, y: 352 },
  ];

  function countMatrix(w, h) {
    const wS = w / 4;
    const hS = h / 4;

    const arr = [];

    for (let i = 0; i < 3; i++) {
      arr.push([]);
      const h = hS * (i + 1);

      for (let j = 0; j < 3; j++) {
        arr[i].push({ x: msc[rnd].x + wS * (j + 1), y: msc[rnd].y + h });
      }
    }
    return arr;
  }

  const ssc = [
    countMatrix(201, 174),
    countMatrix(195, 195),
    countMatrix(175, 175),
  ];

  let dots = '';

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      dots += `<circle cx="${ssc[rnd][i][j].x}" cy="${ssc[rnd][i][j].y}" r="5" fill="red"/>`;
    }
  }

  const svg = `<svg width="600" height="600" style="background: radial-gradient(50% 50% at 50% 50%, #F0F0F0 0%, #F1F1F1 100%);">
<svg x="140" y="410" width="323" height="105" viewBox="0 0 323 105" fill="none">
<ellipse cx="161" cy="27" rx="159" ry="24" fill="url(#a)"/>
<g filter="url(#c)">
<path d="M320 78.7V32C291.26 63.6 15.8 59.2 3 32V78.7521C65.19 112 274.1 107.3 320 79Z" fill="black" fill-opacity="0.2"/>
</g>
<path d="M321 74.7521V28C292.078 59 15 55 2 28V74C64.6 108 274.8 103.3 321 74.7Z" fill="url(#b)"/>
<g filter="url(#e)">
<ellipse cx="161.5" cy="26.5" rx="159.5" ry="24.5" stroke="#F7F7F7" stroke-width="2"/>
</g>
<defs>
<filter id="c" x="0" y="29" width="323" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BIF"/>
<feBlend mode="normal" in="SourceGraphic" in2="BIF" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="d"/>
</filter>
<filter id="e" x="0" y="0" width="323" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BIF"/>
<feBlend mode="normal" in="SourceGraphic" in2="BIF" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="d"/>
</filter>
<linearGradient id="a" x1="313" y1="24" x2="15" y2="23" gradientUnits="userSpaceOnUse">
<stop stop-color="#E9E9E9"/>
<stop offset="1" stop-color="#EDEDED"/>
</linearGradient>
<linearGradient id="b" x1="321" y1="59" x2="4" y2="59" gradientUnits="userSpaceOnUse">
<stop stop-color="#C9C9C9"/>
<stop offset="1" stop-color="#ECECEC"/>
</linearGradient>
</defs>
</svg>

<svg height="20" x="285" y="475" fill="#747474">
<text y="15">1123</text>
</svg>

<svg x="${spheres[1].x}" y="${
    spheres[1].y - 180
  }" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <animateMotion dur="50s" repeatCount="indefinite" path="M273 120C197.391 123.167 51.9999 196.5 10.5 178.5C-31 160.5 73.7447 79.0632 183.5 9.50004C254.5 -35.5 368.5 116 273 120Z"/>
  <circle cx="9" cy="9" r="9" fill="#D9D9D9"/>
  </svg>
  
  <svg x="${spheres[2].x - 200}" y="${spheres[2].y - 240}">
  <animateMotion dur="100s" repeatCount="indefinite" path="M132 263C204.349 263 263 204.349 263 132C263 59.6507 204.349 1 132 1C59.6507 1 1 59.6507 1 132C1 204.349 59.6507 263 132 263ZM132 264C204.902 264 264 204.902 264 132C264 59.0984 204.902 0 132 0C59.0984 0 0 59.0984 0 132C0 204.902 59.0984 264 132 264Z"/>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" r="9" fill="#D9D9D9"/>
  <defs>
  </defs>
  </svg>
  </svg>

<svg x="${msc[rnd].x}px" y="${msc[rnd].y}px" fill="url(#aa)">
<defs>
<linearGradient id="aa" x1="4.5" y1="6.5" x2="194.5" y2="6.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#464646"/>
<stop offset="1" stop-color="#1F1F1F"/>
</linearGradient>
</defs>
  <animate attributeName="y" dur="5s" repeatCount="indefinite" values="${
    msc[rnd].y
  };${msc[rnd].y + 10};${msc[rnd].y}"></animate>
  <path d="${ms[rnd]}"></path>
  </svg>

  <svg x="${ssc[rnd][0][0].x - ss[0].w / 2}" y="${
    ssc[rnd][0][0].y - ss[0].h / 2
  }" fill="#F5F868">
  <animate attributeName="x" dur="25s" repeatCount="indefinite" values="${ssc[rnd][0][0].x - ss[0].w / 2};${(ssc[rnd][0][0].x - ss[0].w / 2) + 20};${(ssc[rnd][0][0].x - ss[0].w / 2) - 20};${(ssc[rnd][0][0].x - ss[0].w / 2)}"></animate>
  <animate attributeName="y" dur="25s" repeatCount="indefinite" values="${ssc[rnd][0][0].y - ss[0].h / 2};${(ssc[rnd][0][0].y - ss[0].h / 2) - 20};${(ssc[rnd][0][0].y - ss[0].h / 2) + 20};${(ssc[rnd][0][0].y - ss[0].h / 2)}"></animate>
  <path d="${ss[0].p}"></path>
  </svg>
  <svg x="${ssc[rnd][2][2].x - ss[1].w / 2}" y="${
    ssc[rnd][2][2].y - ss[1].h / 2
  }" fill="#46C8FF">
  <path d="${ss[1].p}">
  </path>
  </svg>
  <svg x="${ssc[rnd][0][2].x - ss[2].w / 2}" y="${
    ssc[rnd][0][2].y - ss[2].h / 2
  }" fill="#F86868">
  <animate attributeName="x" dur="20s" repeatCount="indefinite" values="${ssc[rnd][0][2].x - ss[2].w / 2};${(ssc[rnd][0][2].x - ss[2].w / 2) - 20};${(ssc[rnd][0][2].x - ss[2].w / 2) + 20};${(ssc[rnd][0][2].x - ss[2].w / 2)}"></animate>
  <animate attributeName="y" dur="20s" repeatCount="indefinite" values="${ssc[rnd][0][2].y - ss[2].h / 2};${(ssc[rnd][0][2].y - ss[2].h / 2) - 20};${(ssc[rnd][0][2].y - ss[2].h / 2) + 20};${(ssc[rnd][0][2].y - ss[2].h / 2)}"></animate>
  <path d="${ss[2].p}"></path>
  </svg>
  <svg x="${ssc[rnd][2][0].x - ss[3].w / 2}" y="${
    ssc[rnd][2][0].y - ss[3].h / 2
  }" fill="#689BFF">
  <path d="${ss[3].p}"></path>
  </svg>

  
  <svg x="${mscs[rnd].x}" y="430" fill-opacity="0.2">
  <defs>
<filter id="filter0_f_54_15" x="0" y="0" width="${mscs[rnd].w}" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_54_15"/>
</filter>
</defs>
<animate attributeName="fill-opacity" dur="5s" repeatCount="indefinite" values="0.1;0.5;0.1"></animate>
<g filter="url(#filter0_f_54_15)">
    <path d="${mscs[rnd].p}" fill="#A0A0A0"></path>
  </svg>
  </g>

  </svg>

</svg>`;

  document.querySelector('#a').innerHTML = svg;
}

generate();

document.querySelector('#btn').onclick = generate;


