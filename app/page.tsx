import Image from 'next/image';
import Graph from '@/components/graph';

export default function Home() {
  return (
    <main className="max-w-md mx-auto bg-[#F3F2EF] overflow-hidden">
      <article className="bg-[#937C5F] relative">
        <section>
          <div id="dark" className="bg-linear-to-b from-black to-none w-full h-[261px] absolute"></div>
          <div id="한자" className="text-[60px] leading-[1.5] tracking-[0.2em] blur-[5px] w-[450px] h-[360px] text-white text-center absolute top-[-15px] left-[-38px] opacity-10">
            甲乙丙丁戊己
            <br />
            庚辛壬癸子丑
            <br />
            寅卯辰巳午未
            <br />
            申酉戌亥甲乙
          </div>
          <div id="title" className="relative flex w-fit mx-auto flex-col items-center top-[84px]">
            <p className="text-base text-[20px] tracking-[-0.05em]">제 1장</p>
            <div className="relative w-[157px] h-[20px] my-[12px]">
              <Image src="/line.svg" id="line" alt="1" fill className="object-contain" />
            </div>
            <p className="text-base text-[20px] tracking-[-0.05em]">나의 사주팔자</p>
          </div>
          <div id="한자2" className="text-[60px] leading-[1.5] tracking-[0.2em] blur-[5px] w-[450px] h-[360px] text-white text-center absolute top-[345px] left-[-38px] opacity-10 z-1">
            甲乙丙丁戊己
            <br />
            庚辛壬癸子丑
            <br />
            寅卯辰巳午未
            <br />
            申酉戌亥甲乙
          </div>
        </section>
        <section className="overflow-hidden">
          <div className="relative flex flex-row-reverse mt-[31px] bottom-[-89px]">
            <div id="light" className="bg-linear-to-t from-white to-none w-full h-[261px] absolute bottom-0 z-2"></div>
            <div className="absolute w-[199.37px] h-[524.98px] rotate-[14deg] blur-[30px] opacity-50 z-0">
              <Image src="/shadow.svg" id="shadow" alt="shadow" fill className="object-contain" />
            </div>
            <div className="relative w-[297.56px] h-[520.98px] z-1">
              <Image src="/girl.svg" id="image" alt="girl" fill className="object-contain" />
            </div>
          </div>
          <div className="absolute w-[215px] [@media(max-width:350px)]:w-[200px] h-[139px] left-[24px] bottom-[-110px] z-2">
            <Image src="/bubble1.svg" id="image" alt="bubble1" fill className="object-contain" />
            <p className="absolute text-black text-[16px] [@media(max-width:350px)]:text-[14px] z-3 top-[32%] [@media(max-width:350px)]:top-[35%] left-[19%] [@media(max-width:350px)]:left-[20%] text-center">
              이제 본격적으로
              <br />
              OO님의 사주팔자를
              <br />
              분석해볼 차례네요.
            </p>
          </div>
          <div className="absolute top-[316px] right-[-28px] w-[507.61px] h-[353.8px] z-0">
            <Image src="/lightbrown.svg" id="image" alt="lightbrown" fill className="object-contain" />
          </div>
        </section>
      </article>
      <article className="mt-[131px] mb-[40px] h-[285px] relative">
        <p className="text-[50px] [@media(max-width:350px)]:text-[39px] text-black absolute right-[116px] z-1">슥슥</p>
        <div className="absolute w-[153px] h-[120px] bottom-[38px]">
          <Image src="/무늬.svg" id="image" alt="1" fill className="object-contain" />
        </div>
        <div className="absolute w-[120px] h-[285px] right-[24px]">
          <Image src="/toon1.svg" id="image" alt="toon1" fill className="object-contain" />
        </div>
      </article>
      <article>
        <div className="relative max-w-[375px] max-h-[306px] aspect-[125/102] mx-auto">
          <Image src="/toon2.svg" id="image" alt="toon2" fill className="object-contain" />
          <div id="light" className="bg-linear-to-t from-white to-none w-full h-[118px] absolute bottom-0 z-2"></div>
          <div className="absolute w-[239px] [@media(max-width:350px)]:w-[200px] h-[138px] left-[24px] top-[-101px]">
            <Image src="/bubble2.svg" id="image" alt="bubble2" fill className="object-contain" />
            <p className="absolute text-black text-[16px] [@media(max-width:350px)]:text-[14px] z-3 top-[25%] [@media(max-width:350px)]:top-[29%] left-[13%] [@media(max-width:350px)]:left-[11%] text-center">
              제가 OO님의 사주를
              <br />
              보기 쉽게 표로 정리했어요.
            </p>
          </div>
        </div>
      </article>
      <div className="mb-[80px] z-2 relative top-[-23px]">
        <Graph />
      </div>
    </main>
  );
}
