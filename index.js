// Import stylesheets
// import keccak256 from './node_modules/keccak256/keccak256.js'


function generate(id) {
  
  const rnd = 0

  const idHash = keccak256(id).toString('hex')
  
  const mainColor = idHash.slice(0, 6)
  const mainShape = Number(`0x${idHash}`) % 11

  function getSideShapes(idHash) {
    let counter = 0;
    let step = 1;
    const hash = {}
    const indecies = []

    // Check when indecies length is not 4, step = max, went through full hash
    while (indecies.length !== 4) {
      if (counter !== idHash.length - 2) {
        const digit = parseInt(idHash.substring(counter, counter + step), 16) % 9;
        if (!hash[digit]) {
          hash[digit] = true
          indecies.push(digit)
        }
        counter++
      } else {
        counter = 0
        step++
      } 
    }
    return indecies
  }

  const sides = getSideShapes(idHash)

  const animationCoords = [
    [[-20, -20], [20, 20]],
    [[20, -20], [-20, 20]],
    [[20, 20], [-20, -20]],
    [[-20, 20], [20, -20]]
  ]

  const sidesAnimations = sides.map(side => {
    return animationCoords[side % 4]
  })
  
  const ms = [
    'M101.5 175L0.6 0.25L202.4 0.25L101.5 175Z',
    'M175 87.5C175 135.8 135.8 175 87.5 175C39.2 175 0 135.8 0 87.5C0 39.1751 39.2 0 87.5 0C135.8 0 175 39.2 175 87.5Z',
    'M0 0H175V175H0V0Z',
    'M95.4594 0L190.919 95.4594L95.4594 190.919L0 95.4594L95.4594 0Z',
    'M90 62L28.5 0.5L0 29L62 90.5L0 152.5L28 181L90 119L152 181L180.5 152.5L118.5 90.5L180.5 28.5L152 0L90 62Z',
    'M195 97.5C195 151.348 151.348 195 97.5 195C43.6522 195 0 151.348 0 97.5C0 43.6522 43.6522 0 97.5 0C151.348 0 195 43.6522 195 97.5ZM48.8211 97.5C48.8211 124.385 70.6154 146.179 97.5 146.179C124.385 146.179 146.179 124.385 146.179 97.5C146.179 70.6154 124.385 48.8211 97.5 48.8211C70.6154 48.8211 48.8211 70.6154 48.8211 97.5Z',
    'M71.3608 115.893C54.9536 119.528 37.1114 116.12 22.7769 105.038C-2.84556 85.2291 -7.5582 48.3994 12.251 22.7769C32.0601 -2.84556 68.8897 -7.5582 94.5122 12.251C108.847 23.3332 116.637 39.7426 117.25 56.5364C133.657 52.9013 151.499 56.3086 165.834 67.3908C191.456 87.1999 196.169 124.03 176.36 149.652C156.551 175.275 119.721 179.987 94.0985 160.178C79.764 149.096 71.9739 132.686 71.3608 115.893ZM40.7369 81.8076C27.9443 71.9174 25.5914 53.5295 35.4816 40.7369C45.3717 27.9443 63.7597 25.5914 76.5523 35.4816C89.3448 45.3717 91.6977 63.7597 81.8076 76.5523C71.9174 89.3448 53.5295 91.6977 40.7369 81.8076ZM112.058 136.947C99.2659 127.057 96.913 108.669 106.803 95.8767C116.693 83.0842 135.081 80.7313 147.874 90.6214C160.666 100.512 163.019 118.9 153.129 131.692C143.239 144.485 124.851 146.838 112.058 136.947Z',
    'M0 0V176H172V0L85.6546 121.574L0 0Z',
    'M97.5 0L123.834 71.1662L195 97.5L123.834 123.834L97.5 195L71.1662 123.834L0 97.5L71.1662 71.1662L97.5 0Z',
    'M79.066 0L157.764 78.6975L79.066 212.132L0.368469 78.6975L79.066 0Z',
    'M14.8283 14.462C34.4554 -4.96283 66.1133 -4.7988 85.5381 14.8283L98 27.4201L110.462 14.8283C129.887 -4.7988 161.545 -4.96283 181.172 14.462C200.799 33.8867 200.963 65.5446 181.538 85.1717L98 169.58L14.462 85.1717C-4.96283 65.5446 -4.7988 33.8867 14.8283 14.462Z'
  ];


  const msc = [
    { x: 198, y: 205 },
    { x: 210, y: 185 },
    { x: 211, y: 185 },
    { x: 203, y: 189 },
    { x: 203, y: 193 },
    { x: 210, y: 185 },
    { x: 202, y: 205 },
    { x: 212, y: 204 },
    { x: 200, y: 185 },
    { x: 219, y: 173 },
    { x: 201, y: 201 }
  ];

  const mscs = [
    {
        p: 'M21 5C21 6.10457 16.9706 7 12 7C7.02944 7 3 6.10457 3 5C3 3.89543 7.02944 3 12 3C16.9706 3 21 3.89543 21 5Z',
        w: 20,
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
    },
    {
      p: 'M21 5C21 6.10457 16.9706 7 12 7C7.02944 7 3 6.10457 3 5C3 3.89543 7.02944 3 12 3C16.9706 3 21 3.89543 21 5Z',
      w: 20,
      x: 291
    },
    {
      p: 'M121 5C121 6.10457 94.5848 7 62 7C29.4152 7 3 6.10457 3 5C3 3.89543 29.4152 3 62 3C94.5848 3 121 3.89543 121 5Z',
      w: 118,
      x: 237
    },
    {
      p: 'M113 5C113 6.10457 88.3757 7 58 7C27.6243 7 3 6.10457 3 5C3 3.89543 27.6243 3 58 3C88.3757 3 113 3.89543 113 5Z',
      w: 110,
      x: 245
    },
    {
      p: 'M81 5C81 6.10457 63.5391 7 42 7C20.4609 7 3 6.10457 3 5C3 3.89543 20.4609 3 42 3C63.5391 3 81 3.89543 81 5Z',
      w: 80,
      x: 294
    },
    {
      p: 'M175 5C175 6.10457 136.496 7 89 7C41.5035 7 3 6.10457 3 5C3 3.89543 41.5035 3 89 3C136.496 3 175 3.89543 175 5Z',
      w: 172,
      x: 212
    },
    {
      p: 'M21 5C21 6.10457 16.9706 7 12 7C7.02944 7 3 6.10457 3 5C3 3.89543 7.02944 3 12 3C16.9706 3 21 3.89543 21 5Z',
      w: 20,
      x: 291
    },
    {
      p: 'M21 5C21 6.10457 16.9706 7 12 7C7.02944 7 3 6.10457 3 5C3 3.89543 7.02944 3 12 3C16.9706 3 21 3.89543 21 5Z',
      w: 20,
      x: 291
    },
    {
      p: 'M21 5C21 6.10457 16.9706 7 12 7C7.02944 7 3 6.10457 3 5C3 3.89543 7.02944 3 12 3C16.9706 3 21 3.89543 21 5Z',
      w: 20,
      x: 291
  },
  ]

  function countMatrix(w, h) {
    const wS = w / 4;
    const hS = h / 4;
  
    const arr = [];
  
    for (let i = 0; i < 3; i++) {
      arr.push([]);
      const h = hS * (i + 1);
  
      for (let j = 0; j < 3; j++) {
        arr[i].push({ x: msc[mainShape].x + wS * (j + 1), y: msc[mainShape].y + h });
      }
    }
    return arr;
  }
  
  const ssc = [
    countMatrix(201, 174),
    countMatrix(195, 195),
    countMatrix(175, 175),
    countMatrix(190, 190),
    countMatrix(180, 180),
    countMatrix(195, 195),
    countMatrix(188, 172),
    countMatrix(172, 176),
    countMatrix(195, 195),
    countMatrix(157, 212),
    countMatrix(196, 170)
  ];
  
  const sShapes = [
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
      p: 'M21.5001 0.993896L42.7133 22.2071L21.5001 43.4203L0.286865 22.2071L21.5001 0.993896Z',
      w: 44,
      h: 44,
    },
    {
      p: 'M0.350448 32.0089C0.126278 28.0756 0.679019 24.1367 1.97711 20.417C3.2752 16.6974 5.29323 13.2698 7.91596 10.3301C10.5387 7.3903 13.7148 4.99592 17.2629 3.28362C20.8109 1.57131 24.6615 0.574621 28.5948 0.350451C32.5281 0.126282 36.467 0.679023 40.1867 1.97712C43.9063 3.27521 47.3339 5.29323 50.2736 7.91596C53.2134 10.5387 55.6078 13.7148 57.3201 17.2629C59.0324 20.8109 60.0291 24.6616 60.2532 28.5948L49.4805 29.2088C49.3369 26.6902 48.6987 24.2246 47.6023 21.9527C46.5059 19.6807 44.9727 17.647 43.0903 15.9676C41.2079 14.2882 39.0131 12.996 36.6313 12.1648C34.2496 11.3336 31.7274 10.9797 29.2088 11.1232C26.6902 11.2668 24.2246 11.905 21.9527 13.0014C19.6807 14.0978 17.647 15.631 15.9676 17.5134C14.2882 19.3958 12.996 21.5906 12.1648 23.9723C11.3336 26.3541 10.9797 28.8763 11.1232 31.3949L0.350448 32.0089Z',
      w: 61,
      h: 33
    },
    {
      p: 'M20 -8.74228e-07C31.0457 -3.91405e-07 40 8.95431 40 20V20C40 31.0457 31.0457 40 20 40V40C8.9543 40 -1.35705e-06 31.0457 -8.74228e-07 20L0 -1.74846e-06L20 -8.74228e-07Z',
      w: 40,
      h: 40
    },
    {
      p: 'M15 0L29.7225 8.5V25.5L15 34L0.277588 25.5V8.5L15 0Z',
      w: 30,
      h: 34
    },
    {
      p: 'M52 0L103.096 24H0.904541L52 0Z',
      w: 104,
      h: 24
    },
    {
      p: 'M28.5 0H0L20.5 31L0 61.5H28.5L42.5 31L28.5 0Z',
      w: 43,
      h: 62
    },
    {
      p: 'M0.526415 10.7754C4.38839 6.27083 9.49938 3.01265 15.2131 1.41286C20.9268 -0.18693 26.9866 -0.0564867 32.6261 1.7877C38.2657 3.63188 43.2317 7.10697 46.8963 11.7735C50.5609 16.4401 52.7593 22.0885 53.2137 28.0045C53.668 33.9205 52.3579 39.8384 49.4489 45.0099C46.54 50.1813 42.1628 54.374 36.871 57.0577C31.5792 59.7414 25.6104 60.7957 19.7194 60.0872C13.8284 59.3787 8.27984 56.9392 3.7753 53.0772L23.3018 30.3018L0.526415 10.7754Z',
      w: 54,
      h: 61
    },
  ];


  let sideShapes = '';

  for (let i = 0; i < 4; i++) {
    const k = Math.floor(sides[i] / 3)
    const l = sides[i] % 3

    const color = idHash.slice(6 * (i + 1), 6 * (i + 2))

    sideShapes += `
    <svg x="${ssc[sides[i]][k][l].x - sShapes[sides[i]].w / 2}" y="${ssc[sides[i]][k][l].y - sShapes[sides[i]].h / 2}" fill="#${color}" >
      <animate attributeName="x" dur="30s" repeatCount="indefinite" values="${ssc[sides[i]][k][l].x - sShapes[sides[i]].w / 2};${(ssc[sides[i]][k][l].x - sShapes[sides[i]].w / 2) + sidesAnimations[i][0][0]};${(ssc[sides[i]][k][l].x - sShapes[2].w / 2) + sidesAnimations[i][1][0]};${(ssc[sides[i]][k][l].x - sShapes[sides[i]].w / 2)}"></animate>
      <animate attributeName="y" dur="30s" repeatCount="indefinite" values="${ssc[sides[i]][k][l].y - sShapes[sides[i]].h / 2};${(ssc[sides[i]][k][l].y - sShapes[sides[i]].h / 2) + sidesAnimations[i][0][1]};${(ssc[sides[i]][k][l].y - sShapes[2].h / 2) + sidesAnimations[i][1][1]};${(ssc[sides[i]][k][l].y - sShapes[sides[i]].h / 2)}"></animate>
      <path d="${sShapes[sides[i]].p}">
    </svg>
    `
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

<svg width="93" height="18" x="20" y="570" viewBox="0 0 93 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0381 0.8L10.4999 0L10.9618 0.8L19.9974 16.45L20.4592 17.25H19.5355H1.46441H0.540649L1.00253 16.45L10.0381 0.8ZM10.0999 2.29282L2.27542 15.8453L10.0999 10.7824V2.29282ZM1.94577 16.4163L1.92629 16.45H1.96761L1.94577 16.4163ZM10.4999 11.4764L18.1864 16.45H2.81348L10.4999 11.4764ZM18.7245 15.8453L10.8999 10.7824V2.29282L18.7245 15.8453ZM19.0323 16.45L19.0541 16.4163L19.0736 16.45H19.0323ZM32.4159 3.346C31.8559 3.346 31.2726 3.472 30.6659 3.724L30.7079 3.864C31.0906 3.724 31.4499 3.654 31.7859 3.654C32.5326 3.654 33.1579 4.01333 33.6619 4.732L30.1899 13.048C30.0499 13.3187 29.8726 13.524 29.6579 13.664C29.4433 13.7947 29.2239 13.86 28.9999 13.86H28.8739V14H31.6879V13.86H31.5759C31.3706 13.86 31.2166 13.7993 31.1139 13.678C31.0206 13.5473 30.9739 13.426 30.9739 13.314C30.9739 13.202 30.9973 13.09 31.0439 12.978L32.0099 10.486H35.8459L36.3919 12.082C36.9519 13.7433 37.6333 14.98 38.4359 15.792C38.8093 16.184 39.2106 16.4873 39.6399 16.702C40.0693 16.926 40.4986 17.038 40.9279 17.038C41.3573 17.038 41.7959 16.9633 42.2439 16.814L42.2299 16.674C42.0433 16.7113 41.8286 16.73 41.5859 16.73C41.3526 16.73 41.0539 16.6647 40.6899 16.534C40.3259 16.4033 39.9759 16.1747 39.6399 15.848C39.3039 15.5307 38.9306 15.05 38.5199 14.406C38.1186 13.7713 37.7219 12.9127 37.3299 11.83L35.6219 6.986C35.2766 6.006 34.9919 5.32933 34.7679 4.956C34.4319 4.41467 34.1286 4.05067 33.8579 3.864C33.3633 3.51867 32.8826 3.346 32.4159 3.346ZM35.7059 10.066H32.1639L34.0119 5.334C34.1893 5.68867 34.3853 6.17867 34.5999 6.804L35.7059 10.066ZM40.6047 13.608C40.4367 13.776 40.2314 13.86 39.9887 13.86H39.8067V14H45.6167L46.4287 11.732H46.2887C46.0461 12.3387 45.7427 12.796 45.3787 13.104C45.0147 13.412 44.4874 13.566 43.7967 13.566H41.7947V5.222C41.7947 5.06333 41.8367 4.914 41.9207 4.774C42.0981 4.48467 42.3547 4.34 42.6907 4.34H42.8727V4.2H39.8067V4.34H39.9887C40.2314 4.34 40.4367 4.42867 40.6047 4.606C40.7821 4.774 40.8754 4.97933 40.8847 5.222V12.978C40.8754 13.2207 40.7821 13.4307 40.6047 13.608ZM48.7806 12.782C49.714 13.7153 50.9273 14.1867 52.4206 14.196C53.0833 14.196 53.6946 14.1027 54.2546 13.916C54.824 13.72 55.2766 13.496 55.6126 13.244C55.9486 12.992 56.238 12.7073 56.4806 12.39V10.08C56.4713 9.87467 56.5273 9.72067 56.6486 9.618C56.77 9.506 56.9473 9.45 57.1806 9.45H57.3906V9.31H54.6466V9.45H54.8706C55.0946 9.45 55.2673 9.506 55.3886 9.618C55.5193 9.72067 55.5846 9.87467 55.5846 10.08V12.558C55.174 12.9407 54.6933 13.2393 54.1426 13.454C53.6013 13.6687 53.0273 13.776 52.4206 13.776C51.2353 13.7667 50.274 13.3373 49.5366 12.488C48.8086 11.6293 48.4446 10.5 48.4446 9.1C48.4446 7.7 48.8086 6.57067 49.5366 5.712C50.274 4.85333 51.2353 4.424 52.4206 4.424C53.3446 4.424 54.1146 4.64333 54.7306 5.082C55.356 5.51133 55.7713 6.12733 55.9766 6.93H56.1026L55.8226 4.956C54.8426 4.32133 53.7086 4.004 52.4206 4.004C50.9273 4.004 49.714 4.47533 48.7806 5.418C47.8566 6.35133 47.3946 7.57867 47.3946 9.1C47.3946 10.6213 47.8566 11.8487 48.7806 12.782ZM59.0071 13.608C58.8391 13.776 58.6338 13.86 58.3911 13.86H58.2091V14H64.0191L64.8311 11.732H64.6911C64.4484 12.3387 64.1451 12.796 63.7811 13.104C63.4171 13.412 62.8898 13.566 62.1991 13.566H60.1971V9.38H62.5771C62.7638 9.38933 62.9178 9.45933 63.0391 9.59C63.1698 9.72067 63.2351 9.87933 63.2351 10.066V10.276H63.3751V8.064H63.2351V8.26C63.2351 8.456 63.1698 8.61933 63.0391 8.75C62.9084 8.88067 62.7498 8.95067 62.5631 8.96H60.1971V4.634H63.0531C63.2677 4.64333 63.4497 4.72733 63.5991 4.886C63.7578 5.04467 63.8371 5.236 63.8371 5.46V5.712H63.9771V3.948C63.8371 4.004 63.5944 4.06 63.2491 4.116C62.9131 4.172 62.6004 4.2 62.3111 4.2H58.2091L58.2231 4.34H58.3911C58.6338 4.34 58.8438 4.41933 59.0211 4.578C59.1984 4.72733 59.2871 4.914 59.2871 5.138V12.978C59.2778 13.2207 59.1844 13.4307 59.0071 13.608ZM66.1524 14H69.5684C70.5951 14 71.3931 13.762 71.9624 13.286C72.5411 12.81 72.8304 12.1987 72.8304 11.452C72.8304 10.696 72.6158 10.0707 72.1864 9.576C71.7571 9.08133 71.1738 8.778 70.4364 8.666C70.8658 8.54467 71.2298 8.302 71.5284 7.938C71.8271 7.56467 71.9764 7.098 71.9764 6.538C71.9764 5.82867 71.7104 5.264 71.1784 4.844C70.6464 4.41467 69.8998 4.2 68.9384 4.2H66.1524L66.1664 4.34H66.3344C66.5771 4.34 66.7824 4.424 66.9504 4.592C67.1278 4.76 67.2211 4.96533 67.2304 5.208V12.992C67.2211 13.2347 67.1278 13.44 66.9504 13.608C66.7824 13.776 66.5771 13.86 66.3344 13.86H66.1664L66.1524 14ZM69.5124 13.482H68.1404V4.648H68.8824C69.5451 4.648 70.0491 4.82067 70.3944 5.166C70.7491 5.51133 70.9264 6.00133 70.9264 6.636C70.9264 6.888 70.8984 7.11667 70.8424 7.322C70.5904 8.23667 69.8484 8.694 68.6164 8.694V8.82H68.6304C69.7131 8.82 70.5251 9.044 71.0664 9.492C71.2718 9.66933 71.4398 9.912 71.5704 10.22C71.7104 10.5187 71.7804 10.8687 71.7804 11.27C71.7804 11.9793 71.5844 12.5253 71.1924 12.908C70.8004 13.2907 70.2498 13.482 69.5404 13.482H69.5124ZM76.2068 4.634H77.1029C77.4389 4.634 77.7188 4.63867 77.9428 4.648C78.4655 4.676 78.8809 4.88133 79.1889 5.264C79.4968 5.64667 79.6602 6.15067 79.6788 6.776V7.098C79.6788 7.25667 79.6508 7.42933 79.5948 7.616C79.2962 8.55867 78.5682 9.044 77.4109 9.072C77.2335 9.08133 77.0842 9.086 76.9629 9.086C76.8415 9.086 76.7435 9.08133 76.6688 9.072V9.212C76.9675 9.212 77.2662 9.37067 77.5648 9.688C77.6675 9.8 77.7655 9.91667 77.8588 10.038C77.9522 10.15 78.2835 10.6167 78.8529 11.438C79.4222 12.2593 79.7675 12.7447 79.8888 12.894C80.0195 13.034 80.1688 13.1833 80.3368 13.342C80.5142 13.4913 80.7755 13.6407 81.1208 13.79C81.4662 13.93 81.8395 14 82.2409 14H82.3036H83.0108H85.1176V13.86H84.9916C84.7956 13.86 84.6463 13.7993 84.5436 13.678C84.4503 13.5473 84.4036 13.4307 84.4036 13.328C84.4036 13.216 84.4223 13.104 84.4596 12.992L85.3976 10.598H89.1776L90.0736 12.978C90.111 13.09 90.1296 13.202 90.1296 13.314C90.1296 13.426 90.0783 13.5473 89.9756 13.678C89.8823 13.7993 89.7376 13.86 89.5416 13.86H89.4156V14H92.5656V13.86H92.4536C92.211 13.86 91.9776 13.7853 91.7536 13.636C91.5296 13.4867 91.3523 13.2673 91.2216 12.978L87.4696 4.004H87.3436C87.3436 4.20933 87.171 4.69 86.8256 5.446L83.6616 12.978C83.5216 13.2673 83.3396 13.4867 83.1156 13.636C82.97 13.7331 82.8225 13.7986 82.6729 13.8326C82.4889 13.802 82.3122 13.7458 82.1429 13.664C82.0215 13.608 81.9002 13.5333 81.7788 13.44C81.6575 13.3467 81.5455 13.2533 81.4428 13.16C81.3402 13.0573 81.1675 12.8753 80.9249 12.614C80.6822 12.3433 80.1595 11.634 79.3568 10.486C79.2075 10.2807 79.0349 10.0847 78.8389 9.898C78.6522 9.702 78.4888 9.57133 78.3488 9.506C79.0115 9.506 79.5715 9.23533 80.0288 8.694C80.4955 8.14333 80.7289 7.49467 80.7289 6.748C80.7289 5.992 80.4862 5.38067 80.0008 4.914C79.5155 4.438 78.8482 4.2 77.9988 4.2H74.2188V4.34H74.4008C74.6435 4.34 74.8488 4.42867 75.0168 4.606C75.1942 4.774 75.2875 4.97933 75.2969 5.222V12.992C75.2875 13.2347 75.1942 13.44 75.0168 13.608C74.8488 13.776 74.6435 13.86 74.4008 13.86H74.2188V14H77.2849L77.2709 13.86H77.1029C76.8508 13.86 76.6362 13.776 76.4588 13.608C76.2908 13.4307 76.2068 13.2207 76.2068 12.978V4.634ZM89.0096 10.178H85.5656L87.3296 5.684L89.0096 10.178Z" fill="black"/>
</svg>


<defs>
<filter id="shadow" x="-9.39197" y="-9.74997" width="211.784" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-10" dy="-10"/>
<feGaussianBlur stdDeviation="11.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape"/>
</filter>
</defs>

<svg height="20" x="140" y="475" width="323" height="105" fill="#747474">
<path id="P" pathLength="2" d="M0 12H323" stroke="transparent"/>
<text>
  <textPath href="#P" 
            startoffset="1" text-anchor="middle" 
            dominant-baseline="middle"
            fill="#747474" font-size="14px">${id}</textPath>
</text>
</svg>

<svg x="${msc[mainShape].x}px" y="${msc[mainShape].y}px" fill="#${mainColor}" filter="url(#shadow)">
  <animate attributeName="y" dur="5s" repeatCount="indefinite" values="${
    msc[mainShape].y
  };${msc[mainShape].y + 10};${msc[mainShape].y}"></animate>
  <path d="${ms[mainShape]}"></path>
  </svg>

  ${sideShapes}

  <svg x="${mscs[mainShape].x}" y="430" fill-opacity="0.2">
  <defs>
<filter id="filter0_f_54_15" x="0" y="0" width="${mscs[mainShape].w}" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_54_15"/>
</filter>
</defs>
<animate attributeName="fill-opacity" dur="5s" repeatCount="indefinite" values="0.1;0.5;0.1"></animate>
<g filter="url(#filter0_f_54_15)">
    <path d="${mscs[mainShape].p}" fill="#A0A0A0"></path>
  </svg>
  </g>

  </svg>

</svg>`;

  document.querySelector('#a').innerHTML = svg;
}

generate(529);

document.querySelector('#btn').onclick = () => generate((Math.random() * (1000 - 0 + 1)) << 0);


