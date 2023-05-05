import React, { useEffect } from 'react';
import Card from './Card';
import PaginationButton from './PaginationButton';
import useDataFetcher from './UseDataFetcher';
import regionbg from '~/assets/regionbg.png';

function Region() {
    const [loading1, pages1, totalPages1, currentPage1, setCurrentPage1] =
        useDataFetcher('north');

    const [loading2, pages2, totalPages2, currentPage2, setCurrentPage2] =
        useDataFetcher('midwest');

    const [loading3, pages3, totalPages3, currentPage3, setCurrentPage3] =
        useDataFetcher('south');
    return (
        <div>
            <div className="relative h-full w-full">
                <img src={regionbg} className="w-full" alt="background"></img>

                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white absolute top-1/2 left-40 translate-x-1/2 -translate-y-1/2">
                    Bắc
                </h1>
                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Trung
                </h1>
                <h1 className="title font-[Babylonica] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_75%)] text-9xl text-white absolute top-1/2 right-32 -translate-x-1/2 -translate-y-1/2">
                    Nam
                </h1>
            </div>

            <div className="max-w-[1240px] mx-auto pt-16 px-4 items-center">
                <div className="flex justify-between  text-center">
                    <a
                        href="#section1"
                        className="p-3 border-2 bg-yellow-400 font-bold px-8 rounded-full hover:bg-yellow-600 active:bg-white active:text-yellow-600 mx-28"
                    >
                        NORTH
                    </a>
                    <a
                        href="#section2"
                        className="p-3 border-2 bg-yellow-400 font-bold px-8 rounded-full hover:bg-yellow-600 active:bg-white active:text-yellow-600 mx-28"
                    >
                        MIDWEST
                    </a>
                    <a
                        href="#section3"
                        className="p-3 border-2 bg-yellow-400 font-bold px-8 rounded-full hover:bg-yellow-600 active:bg-white active:text-yellow-600 mx-28"
                    >
                        SOUTH
                    </a>
                </div>

                <section className="w-full rounded-2xl shadow-2xl my-10 py-8 px-4">
                    <h1 id="section1" className="pt-4">
                        North
                    </h1>
                    <p className='font-sans'>
                        Du lịch miền Bắc Việt Nam là điểm đến hấp dẫn với những
                        dấu ấn riêng biệt. Miền Bắc là nơi hội tụ đầy đủ những
                        tinh túy của đất trời với thiên nhiên hùng vĩ. Mẹ thiên
                        nhiên ban tặng cho nơi đây những dãy núi cao và dài,
                        những cành đồng đỏ nặng phù sa và bãi biển xinh đẹp,
                        mộng mơ. Đến với vùng đất và con người nơi đây bạn sẽ
                        được đắm mình trong không gian yên bình cùng những con
                        người hiếu khách. Điều làm nên sự thu hút khách du lịch
                        đến với miền Bắc Là bởi ngành dịch vụ du lịch phát triển
                        nhanh và mạnh. Hàng loạt những chương trình du lịch, địa
                        điểm du lịch hấp dẫn được mở ra nhằm thu hút và kích cầu
                        sau đại dịch. Hãy cùng khám phá ngay những địa điểm và
                        lưu ý cần thiết khi đến miền Bắc nhé.
                    </p>
                    {loading1 ? (
                        <div className="text-center text-5xl">Loading...</div>
                    ) : (
                        <>
                            <div className="grid grid-cols-3 gap-4 py-8 px-4">
                                {pages1?.map((page) => {
                                    return <Card key={page.id} {...page} />;
                                })}
                            </div>
                            <PaginationButton
                                totalPages={totalPages1}
                                currentPage={currentPage1}
                                setCurrentPage={setCurrentPage1}
                            />
                        </>
                    )}
                </section>

                <section className="w-full rounded-2xl shadow-2xl my-10 py-8 px-4">
                    <h1 id="section2" className="pt-4">
                        Midwest
                    </h1>
                    <p className='font-sans'>
                        Du lịch miền Trung đang nổi lên như một điểm sáng trên
                        bản đồ du lịch toàn cầu, đã nhận được nhiều danh hiệu
                        hàng đầu của cộng đồng du lịch quốc tế. Điển hình như
                        hiện tượng ”Cây Cầu Vàng’’ ở Đà Nẵng. Khu vực miền Trung
                        có nhiều hạn chế hơn miền Bắc và miền Nam do hàng năm
                        phải hứng chịu một số thảm họa thiên nhiên, nhưng nó vẫn
                        luôn là một địa điểm du lịch nổi tiếng. Nơi đây được coi
                        là nơi giao thoa giữa rừng và biển, hội tụ đủ cái đẹp
                        của nắng và gió, cũng như những bãi biển dài, trong xanh
                        và những hòn đảo trữ tình. Đó cũng là lý do khiến ai
                        cũng muốn ghé thăm bởi vẻ đẹp riêng biệt của nó. Tham
                        khảo bài viết này để có kinh nghiệm và lên kế hoạch lịch
                        trình thích hợp nhất cho bản thân bạn nhé!
                    </p>
                    {loading2 ? (
                        <div className="text-center text-5xl">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4 py-8 px-4">
                            {pages2?.map((page) => (
                                <Card key={page?.id} {...page} />
                            ))}
                        </div>
                    )}
                    <PaginationButton
                        totalPages={totalPages2}
                        currentPage={currentPage2}
                        setCurrentPage={setCurrentPage2}
                    />
                </section>

                <section className="w-full rounded-2xl shadow-2xl my-10 py-8 px-4">
                    <h1 id="section3" className="pt-4">
                        South
                    </h1>
                    <p className='font-sans'>
                        Miền Nam luôn luôn nổi tiếng về những địa điểm du lịch
                        lý tưởng. Miền Nam có những vùng giáp đường biển trải
                        dài nổi tiếng về du lịch biển, có vùng thì có hệ thống
                        sông ngòi thuộc vùng đồng bằng Sông Cửu Long nổi tiếng
                        về du lịch sông nước. Ngoài ra, miền Nam còn có những
                        vùng núi Lâm Đồng nổi tiếng với những vẻ đẹp núi non
                        hùng vĩ, khí hậu mát mẻ. Không những vậy, nơi đây có khí
                        hậu nhiệt đới ẩm, tạo ra bầu không khí dễ chịu vào mùa
                        hè, khiến cho chuyến du lịch hè miền Nam mang bầu không
                        khí thoải mái, mát mẻ. Khám phá trọn vẹn vẻ đẹp của
                        thiên nhiên, con người và văn hóa vùng đất luôn là điều
                        thu hút những người đam mê du lịch. Sau đây sẽ là những
                        địa danh bạn nên đến khi đi du lịch hè miền Nam. Ở Việt
                        Nam có khí hậu nhiệt đới gió mùa, nóng ẩm nên vào mùa hè
                        thời tiết rất oi bức nên vào mùa hè sẽ là mùa thích hợp
                        để chúng ta đến những nơi mát mẻ, gió nhiều. Nên du lịch
                        hè miền Nam sẽ là lựa chọn thích hợp vì nơi đây hội tụ
                        đầy đủ đa dạng về rừng núi, hệ thống sông ngòi mát mẻ và
                        biển xanh cát vàng. Ngoài ra bạn có thể tham khảo du
                        lịch hè tại các miền ở Việt Nam trong bài viết dưới đây.
                    </p>
                    {loading3 ? (
                        <div className="text-center text-5xl">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4 py-8 px-4">
                            {pages3?.map((page) => (
                                <Card key={page?.id} {...page} />
                            ))}
                        </div>
                    )}
                    <PaginationButton
                        totalPages={totalPages3}
                        currentPage={currentPage3}
                        setCurrentPage={setCurrentPage3}
                    />
                </section>
            </div>
        </div>
    );
}

export default Region;
