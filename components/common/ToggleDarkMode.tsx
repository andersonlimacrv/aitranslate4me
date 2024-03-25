'use client';
import { useState } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';

const ToggleDarkMode: React.FC = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
				<input
					type="checkbox"
					checked={isChecked}
					onChange={handleCheckboxChange}
					className="sr-only"
				/>
				<div className="bordershadow-card flex h-[38px] w-[78px] items-center justify-center rounded-[20px] bg-primary overflow-hidden px-2">
					<div
						className={`flex h-7 w-7 items-center justify-center rounded-full absolute transition-all duration-200 transform ${
							isChecked
								? 'translate-x-4'
								: '-translate-x-4'
						} bg-muted`}
					></div>
					<div className="flex gap-x-2 px-2">
						<div
							className={`z-10 flex h-6 w-6 items-center justify-center ${
								isChecked
									? 'text-muted'
									: 'text-primary'
							} `}
						>
							<BsMoonStars size={16} />
						</div>
						<div
							className={`z-10 flex h-6 w-6 items-center justify-center ${
								isChecked
									? 'text-primary'
									: 'text-muted'
							} `}
						>
							<BsSun size={17} />
						</div>
					</div>
				</div>
			</label>
		</>
	);
};

export default ToggleDarkMode;
