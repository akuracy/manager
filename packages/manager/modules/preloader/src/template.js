const buildHtml = (loaded, messages) => {
  const loadedClass = loaded ? 'loaded' : '';

  const messagesHtml = `<ul>
  ${messages
    .map((message) => {
      if (Array.isArray(message)) {
        const [welcome, manager] = message;
        return `<li><p>${welcome}</p><h1>${manager}</h1></li>`;
      }
      return `<li><p>${message}</p></li>`;
    })
    .join('')}
</ul>`;

  return `
  <div
    id="managerPreloader"
    class="${loadedClass}">
    <div class="logo">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="600" height="100" viewBox="0 0 600 100">
        <path
          d="M100.982-23.308a54.783 54.783 0 0 1-5.164 61.068h-29.6l9.112-16.018H63.277L77.483-3.144h12.122l11.377-20.136zM42.526 37.76h-30.18a54.088 54.088 0 0 1-5.233-61.205L26.69 10.363 48.269-27h31.755L42.54 37.733z"
          data-name="Logo"
          transform="translate(89.289 27)"/>
        <path
          d="M53 3.433C53-14.42 61.625-23 75.793-23s22.779 8.58 22.779 26.433-8.68 26.334-22.779 26.334S53 21.117 53 3.433zm5.117 0c0 14.677 6.493 21.669 17.676 21.669s17.662-6.991 17.662-21.669-6.493-21.767-17.662-21.767-17.676 7.005-17.676 21.767z"
          data-name="O"
          transform="translate(163 33)"/>
        <path
          d="M106.672-21.389A2.449 2.449 0 0 1 108.957-23a2.378 2.378 0 0 1 1.72.727 2.5 2.5 0 0 1 .7 1.765 3.406 3.406 0 0 1-.215 1.088L94.467 25.667a2.376 2.376 0 0 1-4.557 0L73.215-19.42A3.406 3.406 0 0 1 73-20.508a2.5 2.5 0 0 1 .7-1.765A2.378 2.378 0 0 1 75.42-23a2.449 2.449 0 0 1 2.28 1.611L92.182 17.93z"
          data-name="V"
          transform="translate(192 33)"/>
        <path
          d="M97.059 3.808v20.854a2.451 2.451 0 0 1-1.205 2.29 2.589 2.589 0 0 1-2.641 0 2.451 2.451 0 0 1-1.205-2.29v-45.01a2.451 2.451 0 0 1 1.205-2.29 2.589 2.589 0 0 1 2.641 0 2.451 2.451 0 0 1 1.205 2.29V-.68h25.86v-19.613a2.451 2.451 0 0 1 1.205-2.29 2.589 2.589 0 0 1 2.641 0 2.451 2.451 0 0 1 1.205 2.29v45.01a2.451 2.451 0 0 1-1.205 2.29 2.589 2.589 0 0 1-2.641 0 2.451 2.451 0 0 1-1.205-2.29V3.808z"
          data-name="H"
          transform="translate(218 33)"/>
        <path
          d="M124.7-15.988a13.578 13.578 0 0 1 10.981 4.806 2.02 2.02 0 0 1 .5 1.313 1.959 1.959 0 0 1-.594 1.442 2.055 2.055 0 0 1-1.476.58 2.113 2.113 0 0 1-1.707-.84 9.24 9.24 0 0 0-7.7-3.217c-6.572 0-10.067 4.11-10.067 12.685s3.494 12.751 10.067 12.751a13.194 13.194 0 0 0 8.266-2.994 2.126 2.126 0 0 1 1.344-.486 2.047 2.047 0 0 1 2.07 2.022 2.126 2.126 0 0 1-.928 1.733 16.442 16.442 0 0 1-10.756 3.77c-9.207 0-14.7-5.371-14.7-16.8s5.5-16.765 14.7-16.765z"
          data-name="c"
          transform="translate(243 42)"/>
        <path
          d="M129.5-21.669v41.891c0 2.924.914 4.138 2.807 4.138a2.1 2.1 0 0 1 1.973 1.047 2.286 2.286 0 0 1 0 2.307 2.1 2.1 0 0 1-1.973 1.047c-4.7 0-7.308-2.938-7.308-8.566v-41.864A2.353 2.353 0 0 1 127.251-24a2.3 2.3 0 0 1 2.249 2.331z"
          data-name="l"
          transform="translate(264 31)"/>
        <path
          d="M161.181.757c0 11.443-5.945 16.823-15.6 16.823S130 12.2 130 .757 136.015-16 145.583-16s15.598 5.3 15.598 16.757zm-4.826 0c0-8.8-3.931-12.706-10.771-12.706S134.826-8 134.826.757s3.931 12.771 10.757 12.771 10.828-3.84 10.828-12.771z"
          data-name="o"
          transform="translate(271 42)"/>
        <path
          d="M150.542-13.735V4.713c0 4.6 1.483 8.551 8.643 8.551s8.656-4 8.656-8.551v-18.448a2.289 2.289 0 0 1 .7-1.617 2.3 2.3 0 0 1 1.638-.648 2.233 2.233 0 0 1 1.574.675 2.221 2.221 0 0 1 .63 1.589V4.713c0 6.66-2.2 12.867-13.2 12.867S146 11.426 146 4.713v-18.448a2.221 2.221 0 0 1 .653-1.613 2.235 2.235 0 0 1 1.618-.652 2.281 2.281 0 0 1 2.271 2.264z"
          data-name="u"
          transform="translate(293 42)"/>
        <path
          d="M185.2-1.526v-20.146A2.413 2.413 0 0 1 187.691-24a2.413 2.413 0 0 1 2.49 2.328v36.114c0 9.587-6.371 14.325-15.232 14.325-10.032 0-15.949-5.6-15.949-17.516S164.609-6.2 174.627-6.2A13.554 13.554 0 0 1 185.2-1.526zm0 5.889a11.651 11.651 0 0 0-10.252-6.4c-7.323 0-10.97 4.287-10.97 13.23s3.808 13.3 10.97 13.3c5.975 0 10.252-3.191 10.252-10.107z"
          data-name="d"
          transform="translate(312 31)"/>
      </svg>

      ${messagesHtml}
    </div>
  </div>`;
};

const buildStyle = (messages) => {
  const messageDuration = 5;

  const messagesStyle = messages
    .map(
      (message, index) => `#managerPreloader li:nth-child(${index + 1}) {
    animation-delay: ${index * messageDuration}s;
  }
`,
    )
    .join('');

  const fadOutPercent = Math.floor(100 / messages.length);

  const messageAnimation = `
  @keyframes message {
    0% { opacity: 0; }
    3% { opacity: 1; }
    ${fadOutPercent - 3}% { opacity: 1; }
    ${fadOutPercent}% { opacity: 0; }
    100% { opacity: 0; }
  }
`;

  return `
  #managerPreloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 9999;
    display: flex !important;
  }

  #managerPreloader.loaded {
    transition: opacity 800ms 1s, visibility 1800ms;
    opacity: 0;
    visibility: hidden !important;
  }

  #managerPreloader .logo {
    margin: auto !important;
    width: 600px;
    max-width: 95%;
    height: 200px;
    text-align: center;
  }

  #managerPreloader .logo svg {
    width: 600px;
    max-width: 100%;
  }

  #managerPreloader .logo path {
    fill: #0050D7;
  }

  #managerPreloader ul {
    position: relative;
    padding: 0;
  }

  #managerPreloader li {
    font-size: 24px;
    list-style: none;
    position: absolute;
    opacity: 0;
    width: 100%;

    animation: message ${messages.length *
      messageDuration}s ease-in-out infinite 0s;
  }

  #managerPreloader li p {
    color: #0050d7;
    font-size: 28px;
    letter-spacing: 0;
    line-height: 35px;
    font-family: "Source Sans Pro";
    font-weight: 400;
    margin-bottom: 10px;
  }

  #managerPreloader li h1 {
    margin-top: 10px;
    color: #0050d7;
    font-size: 36px;
    letter-spacing: 0;
    line-height: 45px;
    font-family: "Source Sans Pro";
    font-weight: 400;
  }

  ${messagesStyle}
  ${messageAnimation}
  `;
};

const buildTemplate = (loaded, messages) => `
    <style type="text/css">
        ${buildStyle(messages)}
    </style>
    ${buildHtml(loaded, messages)}
  `;

export default buildTemplate;
