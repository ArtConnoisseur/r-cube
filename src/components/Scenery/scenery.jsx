import gsap from 'gsap';


export function Scenery() {

  gsap.to("#circle-container-2", {duration: 10, rotation: 360, transformOrigin: "50% 50%", repeat: -1, ease: "linear"});
  gsap.to("#circle-container-1", {duration: 6, rotation: 360, transformOrigin: "50% 50%", repeat: -1, ease: "linear", delay: 2});

  return (
    <svg width="450" height="450" viewBox="0 0 1292 1292" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="main-graphic" filter="url(#filter0_i_18_79)">
      <g clipPath="url(#clip0_18_79)">
      <rect width="1292" height="1292" rx="646" fill="url(#paint0_linear_18_79)"/>
      <path id="Rectangle 4" d="M503.634 914.88L587.492 810L636.461 840.624H704.201L760.721 964.694L886 1019H320L503.634 914.88Z" fill="#3A4755"/>
      <g id="Vector" filter="url(#filter1_d_18_79)">
      <path d="M321.572 400.74C354.477 400.74 381.152 373.883 381.152 340.752C381.152 307.621 354.477 280.763 321.572 280.763C288.666 280.763 261.991 307.621 261.991 340.752C261.991 373.883 288.666 400.74 321.572 400.74Z" fill="url(#paint1_linear_18_79)"/>
      </g>
      <path id="Vector 4" d="M733.585 673.014C675.492 540.472 620.99 520.123 601 526.516C622.214 495.502 670.842 457.225 695.645 552.224C720.449 647.223 788.93 672.333 820.071 673.014L793.962 566.099H830.269C830.269 607.994 833.37 688.031 845.772 673.014C858.173 657.997 939.601 615.067 978.764 595.48C1006.91 602.961 1051.46 618.903 1004.47 622.821C945.72 627.718 875.144 673.014 830.269 721.166C794.37 759.688 791.106 927.106 793.962 1006H695.645C732.497 950.23 791.677 805.555 733.585 673.014Z" fill="#715E46"/>
      <g id="circle-container-3" filter="url(#filter2_d_18_79)">
      <path d="M1292 646C1292 1002.78 1002.78 1292 646 1292C289.224 1292 0 1002.78 0 646C0 289.224 289.224 0 646 0C1002.78 0 1292 289.224 1292 646ZM284.436 726.801C293.006 793.727 250.788 833.758 284.436 871.263C348.505 942.678 424.817 999.402 519.085 1005.12C625.188 1005.12 583.563 992.057 639.879 992.057C739.452 992.057 739.86 1033.27 795.768 1010.83C843.552 991.645 884.322 845.554 921.866 805.154C959.661 771.065 1054.21 664.67 1091.63 628.86C1160.04 563.397 1152.03 556.221 1133.25 508.883C1130.63 510.98 1118.83 515.113 1104.69 533.368C1118.97 560.302 1099.79 609.68 1044.7 597.846C1032.46 628.86 997.344 629.108 966.756 632.533C847.594 632.533 886.734 547.228 847.594 555.813C823.723 561.049 853.308 587.644 798.624 593.765C721.496 589.684 750.167 560.162 732.106 560.302C715.875 560.428 705.989 559.099 683.136 560.302C655.839 559.226 644.927 522.491 623.147 520.718C611.661 519.783 601.53 534.69 592.133 533.368C565.602 529.637 554.181 500.313 534.184 486.438C509.742 469.478 521.126 461.137 521.126 450.524C505.618 450.524 496.641 452.567 474.196 437.468C454.2 420.737 458.901 410.619 446.446 405.229C422.719 394.963 404.633 396.466 390.538 371.766C384.754 361.631 399.114 342.32 386.049 320.347C377.071 305.248 371.766 283.212 386.049 260.359C342.792 292.598 336.069 279.815 299.535 324.836C259.135 374.623 264.536 440.411 260.767 456.24C246.484 516.229 278.548 680.818 284.436 726.801Z" fill="#5DA825"/>
      </g>
      <g id="circle-container-2" filter="url(#filter3_d_18_79)">
      <path d="M1292 646C1292 1002.78 1002.78 1292 646 1292C289.224 1292 0 1002.78 0 646C0 289.224 289.224 0 646 0C1002.78 0 1292 289.224 1292 646ZM285.66 575.809C315.354 643.143 165.275 770.874 213.429 908.807C247.051 1005.12 238.066 1013.74 308.105 1078.57C374.549 1140.08 518.269 1179.78 625.188 1179.78C724.761 1179.78 782.345 1132.85 811.683 1078.57C836.168 1033.27 814.366 1014.04 854.124 978.182C976.142 889.219 854.124 800.256 944.311 705.989C1012.72 640.525 1086.99 613.922 1096.12 520.31C1096.12 360.923 1056.13 339.527 984.303 283.212C955.61 260.714 784.749 307.697 677.831 257.094C608.569 224.314 595.913 171.083 553.773 133.036C521.018 103.463 492.152 124.058 438.692 146.503C259.46 221.753 227.808 302.069 224.039 317.899C209.756 377.888 227.712 444.406 285.66 575.809Z" fill="#7AB918"/>
      </g>
      <g id="circle-container-1" filter="url(#filter4_dd_18_79)">
      <path d="M1292 646C1292 1002.78 1002.78 1292 646 1292C289.224 1292 0 1002.78 0 646C0 289.224 289.224 0 646 0C1002.78 0 1292 289.224 1292 646ZM182.006 598.662C182.006 667.747 63.4968 787.198 76.7202 849.227C98.2108 950.036 206.644 1032.92 276.682 1097.75C343.126 1159.26 448.915 1190.33 544.795 1219.77C629.268 1235.68 752.51 1271.6 880.241 1143.86C921.108 1103 915.979 1023.02 955.737 987.16C993.532 953.072 1086.04 917.683 1123.46 881.874C1191.87 816.41 1209.82 734.715 1218.95 641.103C1218.95 481.716 1133.66 295.046 1006.34 239.955C972.877 225.475 903.31 233.669 872.488 212.205C830.25 182.792 804.037 107.013 761.896 68.9665C729.141 39.3937 681.756 42.849 641.919 42.849C466.634 42.849 277.457 133.022 181.19 290.149C119.354 391.078 182.006 486.069 182.006 598.662Z" fill="#90CD36"/>
      </g>
      <g id="Group" filter="url(#filter5_d_18_79)">
      <path id="fan-stick" d="M306.198 582.151L312.95 834.702H299.447L306.198 582.151Z" fill="white"/>
      <path id="fan-blade" d="M345.723 585.151L413.451 639.899L340.099 595.014L305.299 581.945L345.723 585.151Z" fill="white"/>
      <path id="fan-blade_2" d="M267.187 587.219L198.509 640.298L271.987 595.634L306.33 581.765L267.187 587.219Z" fill="white"/>
      <path id="fan-blade_3" d="M321.419 546.542L310.394 459.634L311.857 546.542L306.57 583.654L321.419 546.542Z" fill="white"/>
      </g>
      <g id="Group_2" filter="url(#filter6_d_18_79)">
      <path id="fan-stick_2" d="M389.978 717.834L393.671 855.985H386.285L389.978 717.834Z" fill="white"/>
      <path id="fan-blad" d="M411.599 719.476L448.648 749.424L408.523 724.871L389.486 717.722L411.599 719.476Z" fill="white"/>
      <path id="fan-blad_2" d="M368.638 720.607L331.07 749.642L371.264 725.21L390.05 717.624L368.638 720.607Z" fill="white"/>
      <path id="fan-blade_4" d="M398.304 698.356L392.274 650.815L393.074 698.356L390.182 718.657L398.304 698.356Z" fill="white"/>
      </g>
      <path id="Vector 1" d="M264.46 911.055C258.828 910.29 246.786 904.819 243.678 889.057C239.793 869.354 253.389 841.999 264.46 822.297C275.531 802.594 293.983 856.729 297.09 862.276C300.198 867.823 303.305 898.43 292.235 904.742C289.171 906.489 285.571 907.782 281.941 908.727V943H272.229V910.533C269.073 910.913 266.328 911.055 264.46 911.055Z" fill="#318A16"/>
      <path id="Vector 2" d="M302.825 983.377C297.884 982.691 287.321 977.79 284.595 963.667C281.187 946.013 293.113 921.503 302.825 903.85C312.536 886.196 328.722 934.701 331.448 939.671C334.174 944.642 336.9 972.065 327.188 977.721C324.501 979.286 321.343 980.445 318.158 981.292V1012H309.64V982.91C306.871 983.25 304.463 983.377 302.825 983.377Z" fill="#318A16"/>
      <path id="Vector 3" d="M245.813 978.488C241.662 977.925 232.789 973.899 230.499 962.298C227.637 947.796 237.655 927.664 245.813 913.162C253.97 898.661 267.566 938.504 269.856 942.587C272.146 946.67 274.436 969.196 266.278 973.842C264.021 975.128 261.368 976.08 258.693 976.775V1002H251.537V978.104C249.211 978.384 247.189 978.488 245.813 978.488Z" fill="#318A16"/>
      </g>
      </g>
      <defs>
      <filter id="filter0_i_18_79" x="0" y="0" width="1302" height="1302" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="10" dy="10"/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.6 0 0 0 0 0.25098 0 0 0 1 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_18_79"/>
      </filter>
      <filter id="filter1_d_18_79" x="241.991" y="260.763" width="179.161" height="179.977" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="10" dy="10"/>
      <feGaussianBlur stdDeviation="15"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0.615686 0 0 0 0 0.509804 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_79"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_79" result="shape"/>
      </filter>
      <filter id="filter2_d_18_79" x="-10" y="-10" width="1332" height="1332" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="10" dy="10"/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.478431 0 0 0 0 0.74902 0 0 0 0 0.552941 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_79"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_79" result="shape"/>
      </filter>
      <filter id="filter3_d_18_79" x="-1" y="-10" width="1332" height="1332" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="19" dy="10"/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.529412 0 0 0 0 0.0352941 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_79"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_79" result="shape"/>
      </filter>
      <filter id="filter4_dd_18_79" x="-40" y="0" width="1372" height="1332" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="20" dy="20"/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0.6 0 0 0 0 0.172549 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_79"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-20" dy="20"/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.572549 0 0 0 0 0.168627 0 0 0 1 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_18_79" result="effect2_dropShadow_18_79"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_18_79" result="shape"/>
      </filter>
      <filter id="filter5_d_18_79" x="178.509" y="439.634" width="254.942" height="415.068" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_79"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_79" result="shape"/>
      </filter>
      <filter id="filter6_d_18_79" x="311.07" y="630.815" width="157.578" height="245.17" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_79"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_79" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_18_79" x1="328.101" y1="309.329" x2="824.334" y2="965.939" gradientUnits="userSpaceOnUse">
      <stop stopColor="#C3D9EB"/>
      <stop offset="1" stopColor="#63E4D0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_18_79" x1="321.572" y1="280.763" x2="391.486" y2="483.716" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E9E83F"/>
      <stop offset="1" stopColor="#F4CD2C"/>
      </linearGradient>
      <clipPath id="clip0_18_79">
      <rect width="1292" height="1292" rx="646" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}