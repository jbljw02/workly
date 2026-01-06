'use client';

import HorizontalDivider from '../editor/child/divider/HorizontalDivider';
import CommonButton from '../button/CommonButton';
import { useRouter } from 'next/navigation';
import CautionCircleIcon from '../../../public/svgs/caution-circle.svg';

export default function Maintenance() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <div className='flex flex-col w-auto pb-6'>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center mb-7'>
                        <CautionCircleIcon width="62" />
                    </div>
                    <div className='font-semibold mb-4 text-2xl'>임시 점검 중</div>
                    <div className='text-base mb-5 text-neutral-600 text-center'>
                        현재 시스템 점검 중입니다.
                        <br />
                        서비스 이용에 불편을 드려 죄송합니다.
                        <br />
                        <span className='text-black font-bold mt-2 block'>
                            체험판은 정상적으로 이용 가능합니다.
                        </span>
                    </div>
                </div>
                <HorizontalDivider borderColor='border-neutral-300' />
                <div className='flex flex-row items-center justify-center mt-5 gap-4'>
                    <CommonButton
                        style={{
                            width: 'w-[175px]',
                            height: 'h-[42px]',
                            textSize: 'text-base',
                            textColor: 'text-white',
                            bgColor: 'bg-black',
                            hover: 'hover:bg-zinc-800'
                        }}
                        label="홈으로 돌아가기"
                        onClick={handleGoHome} />
                </div>
            </div>
        </div>
    );
}

