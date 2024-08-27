
const Input = ({ icon, className, ...props }) => {
	return (
		<div className={`${className} flex items-center`}>
			<input
				{...props}
				className="outline-none placeholder:text-black bg-[#ADDF8807] w-full border-none"
			/>
			{icon && icon}
		</div>
	);
};

export default Input;
