import React from 'react';
import Image from 'next/image';

const Graph = () => {
  const sajuData = {
    header: {
      name: '김로켓',
      date: '1980년 8월27일 08:10',
    },
    columns: ['時', '日', '月', '年'],
    rows: [
      {
        label: '十星',
        subLabel: '십성',
        cells: [
          { main: ['傷官'], sub: ['(상관)'] },
          { main: ['比肩'], sub: ['(비견)'] },
          { main: ['傷官'], sub: ['(상관)'] },
          { main: ['傷官'], sub: ['(상관)'] },
        ],
      },
      {
        label: '天干',
        subLabel: '천간',
        cells: [
          { miniHeader: ['임'], main: ['壬'], sub: ['陽水'], type: 'dark' },
          { miniHeader: ['정'], main: ['丁'], sub: ['陰火'], type: 'red' },
          { miniHeader: ['계'], main: ['癸'], sub: ['陰水'], type: 'dark' },
          { miniHeader: ['계'], main: ['庚'], sub: ['陽金'], type: 'dark' },
        ],
      },
      {
        label: '地支',
        subLabel: '지지',
        cells: [
          { miniHeader: ['인'], main: ['寅'], sub: ['陽木'], type: 'teal' },
          { miniHeader: ['사'], main: ['巳'], sub: ['陰火'], type: 'red' },
          { miniHeader: ['혜'], main: ['亥'], sub: ['陰水'], type: 'dark' },
          { miniHeader: ['유'], main: ['酉'], sub: ['陰金'], type: 'white' },
        ],
      },
      {
        label: '十星',
        subLabel: '십성',
        cells: [
          { main: ['比肩'], sub: ['(비견)'] },
          { main: ['劫財'], sub: ['(겁재)'] },
          { main: ['食神'], sub: ['(식신)'] },
          { main: ['偏財'], sub: ['(편재)'] },
        ],
      },
      {
        label: '十二運星',
        subLabel: '십이운성',
        cells: [
          { main: ['死'], sub: ['(사)'] },
          { main: ['帝旺'], sub: ['(제왕)'] },
          { main: ['胎'], sub: ['(태)'] },
          { main: ['長生'], sub: ['(장생)'] },
        ],
      },
      {
        label: '十二神殺',
        subLabel: '십이신살',
        cells: [
          { main: ['劫殺'], sub: ['(겁살)'] },
          { main: ['地殺'], sub: ['(지살)'] },
          { main: ['驛馬殺'], sub: ['(역마살)'] },
          { main: ['將星殺'], sub: ['(장성살)'] },
        ],
      },
      {
        label: '貴人',
        subLabel: '귀인',
        cells: [{ main: ['(없음)'] }, { main: ['(없음)'] }, { main: ['天乙'], sub: ['(천을귀인)'] }, { main: ['天乙', '太極', '文昌'], sub: ['(천을귀인)', '(태극귀인)', '(문창귀인)'] }],
      },
    ],
  };

  const cellColors: { [key: string]: string } = {
    blue: '#336699',
    red: '#CC3333',
    teal: '#008080',
    dark: '#333333',
    white: '#F9F9F9',
  };

  return (
    <div className="relative border-[#1B2F49] border-[3px] font-['Nanum_Gothic'] flex flex-col items-center bg-[#F5F3EC] mx-auto max-w-[351px] w-full [@media(max-width:350px)]:w-[271px] max-h-[621px] [@media(max-width:350px)]:h-[541px]">
      <div className="absolute w-[56px] h-[38px] top-[45px] left-[9px] [@media(max-width:350px)]:w-[46px] [@media(max-width:350px)]:h-[28px]">
        <Image src="/왼쪽무늬.svg" id="image1" alt="1" fill className="object-contain" />
      </div>
      <div className="absolute w-[56px] h-[38px] top-[26px] right-[8px] [@media(max-width:350px)]:w-[46px] [@media(max-width:350px)]:h-[28px]">
        <Image src="/오른쪽무늬.svg" id="image2" alt="1" fill className="object-contain" />
      </div>
      <div className="border-[#2B557E] border-x-[1px] pt-[40px] [@media(max-width:350px)]:w-[256px] [@media(max-width:350px)]:h-[541px]">
        {/* 헤더 */}
        <div className="mb-5 text-center relative w-full flex flex-col items-center">
          <div className="text-[#424242] text-[16px] font-bold mb-3 [@media(max-width:350px)]:text-[12px]">{sajuData.header.name}님의 사주</div>
          <div className="text-[#424242] text-[20px] font-bold [@media(max-width:350px)]:text-[16px]">{sajuData.header.date}</div>
        </div>

        {/* 표 */}
        <div className="grid w-full px-[12px] mb-[14px] [grid-template-columns:48px_repeat(4,minmax(0,65px))] [@media(max-width:350px)]:[grid-template-columns:40px_repeat(4,minmax(0,55px))]">
          {/* 빈 셀 */}
          <div className="border-b border-r border-black h-[44px] [@media(max-width:350px)]:h-[38px]"></div>
          {/* 행 */}
          {sajuData.columns.map((col, idx) => (
            <div
              key={idx}
              className={`text-black border-b-[1px] border-r-[1px] border-[#8A8A8A] h-[44px] [@media(max-width:350px)]:h-[38px] flex justify-center items-center font-bold text-[20px] [@media(max-width:350px)]:text-[16px] ${
                idx === sajuData.columns.length - 1 ? 'border-r-[2px] border-black' : 'border-r'
              }`}
            >
              {col}
            </div>
          ))}

          {/* 열 */}
          {sajuData.rows.map((row, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <div
                className={`text-black border-r border-black text-center font-bold flex flex-col justify-center items-center w-[48px] [@media(max-width:350px)]:w-[40px] ${
                  rowIdx === 1 ? 'border-b-[#9B9B9B] border-b-[1px]' : 'border-b-[2px]'
                }`}
              >
                <div className="text-[12px] [@media(max-width:350px)]:text-[10px]">{row.label}</div>
                <div className="text-[7.8px] [@media(max-width:350px)]:text-[8px] font-normal text-black">({row.subLabel})</div>
              </div>
              {row.cells.map((cell, cellIdx) => {
                const isSpecialCell = row.label === '天干' || row.label === '地支';

                return (
                  <div
                    key={cellIdx}
                    className={`text-black bg-white min-h-[41px] [@media(max-width:350px)]:min-h-[38px] flex justify-center items-center box-border ${
                      rowIdx === 1 ? 'border-b-[#8A8A8A] border-b-[1px]' : 'border-b-[2px]'
                    } ${cellIdx < sajuData.columns.length - 1 ? 'border-r' : 'border-r-[2px] border-black'}`}
                  >
                    {isSpecialCell ? (
                      <div
                        className={`rounded-lg flex flex-col justify-center items-center m-[6px] [@media(max-width:350px)]:m-[4px] p-1 [@media(max-width:350px)]:p-[2px] shadow-md leading-tight min-h-[41px] [@media(max-width:350px)]:mon-h-[45px] w-[50px] [@media(max-width:350px)]:w-[45px] ${
                          'type' in cell && cell.type === 'white' ? 'text-black border-[1px]' : 'text-white'
                        }`}
                        style={{
                          backgroundColor: 'type' in cell && cell.type ? cellColors[cell.type] : '#fff',
                        }}
                      >
                        {'miniHeader' in cell && cell.miniHeader?.[0] && <div className="text-[7px] [@media(max-width:350px)]:text-[5px]">{cell.miniHeader[0]}</div>}
                        <div className="text-lg [@media(max-width:350px)]:text-[15px] font-bold">{cell.main[0]}</div>
                        {cell.sub && cell.sub[0] && <div className="text-[8px] [@media(max-width:350px)]:text-[5px]">{cell.sub[0]}</div>}
                      </div>
                    ) : (
                      <div className="text-center">
                        {cell.main.map((line, lineIdx) => (
                          <React.Fragment key={lineIdx}>
                            <div className="text-[15px] [@media(max-width:350px)]:text-[12px] font-bold">{line}</div>
                            {cell.sub && cell.sub[lineIdx] && <div className="text-[10px] [@media(max-width:350px)]:text-[8px] text-black">{cell.sub[lineIdx]}</div>}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="border-y-[1px] border-[#2B557E] w-full h-[605px] absolute mt-[5px] w-[351px] [@media(max-width:350px)]:h-[525px]"></div>
    </div>
  );
};

export default Graph;
