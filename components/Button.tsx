import Image from 'next/image'

type ButtonProps = {
    type: "button" | "submit",
    title: string,
    icon?: string,
    variant: "btn_dark_green"
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
        className={`flexCenter gap-3 ${variant} py-2 px-4 rounded-full border`}
        type={type}
    >
        {icon && <Image src={icon} alt="icon" width={24} height={24} />}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button