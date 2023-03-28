import {BiError} from 'react-icons/bi'

const Custom404 = () => {
    return (
        <div className='flex items-center justify-center h-screen w-full bg-black text-gray-200'>
            <div className='divide-white divide-dashed divide-y space-y-1'>
                <h1 className='text-2xl font-mono flex items-center'>Error<BiError size={30}></BiError></h1>
                <p className='font-mono'>This page is still being created</p>
            </div>
        </div>
    );
}

export default Custom404;
