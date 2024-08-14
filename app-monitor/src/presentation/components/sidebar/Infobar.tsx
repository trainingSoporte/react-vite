import Image from 'next/image';

export const Infobar = () => {
    const user = {
        name: 'Adrian Ojeda',
        employeeId: 'CTI8835',
        imageUrl: '/mi_foto.png'
    };

    return (
        <div className='flex justify-end gap-2 items-center bg-zinc-200 rounded-md p-2 shadow-lg'>
            <div>
                <p className='text-sm text-right text-red-400'>Legajo: {user.employeeId}</p>
                <p className='text-sm text-right text-red-400'>Nombre: {user.name}</p>
            </div>
            <div>
                <Image src={user.imageUrl} alt="User Image" width={30} height={30} />
            </div>
        </div>
    );
}