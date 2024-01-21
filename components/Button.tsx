import Image from 'next/image'

type ButtonProps = {
    type: "button" | "submit",
    title: string,
    icon?: string,
    variant: "btn_dark_green" | "btn_green" | "btn_white"
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
        className={`flexCenter gap-3 ${variant} py-2 px-4 rounded-full border`}
        type={type}
    >
        {icon && <Image src={icon} alt="icon" width={24} height={24} className='cursor-pointer' />}
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button