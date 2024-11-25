import React from 'react';

const WeddingArch: React.FC<React.SVGProps<SVGAElement>> = ({
  width = 32,
  height = 32,
  className,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='8'
        d='M445.1,282.811v-68.703c0-44.711-15.889-88.097-44.741-122.167c-26.627-31.444-62.836-53.363-102.698-62.355
			c0.152-1.128,0.256-2.321,0.256-3.622C297.915,11.647,286.376,0,272.19,0c-6.889,0-12.043,2.509-16.273,5.692
			C251.57,2.395,246.579,0,239.68,0c-14.163,0-25.686,11.647-25.686,25.964c0,1.312,0.083,2.516,0.221,3.63
			c-39.856,8.998-76.057,30.921-102.678,62.364c-28.842,34.067-44.726,77.448-44.726,122.15v32.919v35.379L44.462,485.522h22.349
			v19.361h15.223v-19.361h47.394l-22.484-203.123v-23.757c76.959-53.225,115.291-104.145,133.935-137.687
			c6.912-12.434,11.714-23.452,15.061-32.683c3.347,9.231,8.149,20.249,15.061,32.683c18.642,33.54,56.97,84.457,133.92,137.678
			v23.774l-22.349,203.116h47.305v19.361H445.1v-19.361h22.438L445.1,282.811z M82.034,262.249h9.688v12.961h-9.688V262.249z
			 M112.427,470.299H61.451l19.791-179.867h11.275L112.427,470.299z M226.956,114.663c-18.025,32.044-55.205,80.909-130.001,132.364
			H82.034v-32.919c0-82.785,57.866-153.58,138.319-170.268c6.245,8.211,18.322,19.088,25.589,25.351
			C243.328,79.338,237.945,95.127,226.956,114.663z M255.939,57.116l-0.735-0.046c-10.118-8.79-21.985-20.09-24.256-24.688
			l-0.075-0.152c-0.961-1.945-1.656-3.352-1.656-6.267c0.001-6.023,4.596-10.741,10.463-10.741c3.913,0,6.19,1.518,11.042,6.079
			l5.272,4.955l5.216-5.014c4.242-4.079,6.967-6.02,10.98-6.02c5.889,0,10.503,4.718,10.503,10.741c0,2.69-0.783,4.34-1.692,6.25
			l-0.132,0.278c-1.953,4.12-13.139,15.036-24.174,24.577L255.939,57.116z M284.922,114.663
			c-10.986-19.53-16.368-35.312-18.983-45.461c7.296-6.263,19.403-17.134,25.616-25.363
			c80.456,16.687,138.321,87.476,138.321,170.268v32.919h-14.954C340.129,195.572,302.948,146.707,284.922,114.663z
			 M429.831,262.249v12.961h-0.001h-9.687v-12.961H429.831z M399.56,470.299l19.791-179.867h11.275l19.91,179.867H399.56z'
      />
      <path
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='8'
        d='M285.279,383.466v-2.939h63.957v-15.223h-63.957H226.63h-63.956v15.223h63.956v2.939c0,13.538,9.223,24.957,21.714,28.318
			v67.054l-30.229,20.578L226.681,512l29.258-19.917L285.195,512l8.566-12.584l-30.197-20.557v-67.076
			C276.055,408.422,285.279,397.003,285.279,383.466z M255.955,397.568c-7.777,0-14.102-6.326-14.102-14.102v-2.939h28.204v2.939
			C270.057,391.241,263.732,397.568,255.955,397.568z'
      />
    </svg>
  );
};

export default WeddingArch;
