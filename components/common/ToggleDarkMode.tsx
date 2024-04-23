'use client';
import { useState, useEffect } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const ToggleDarkMode: React.FC = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		setTheme(darkMode ? 'light' : 'dark');
	};

	useEffect(() => {
		if (resolvedTheme === 'dark') {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, [resolvedTheme]);

	return (
		<>
			<label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
				<input
					type="checkbox"
					checked={darkMode}
					onChange={toggleDarkMode}
					className="sr-only"
				/>
				<div className="flex h-[38px] w-[74px] items-center justify-center rounded-[25px] bg-accent-foreground overflow-hidden px-2">
					<div
						className={`flex h-8 w-8 items-center justify-center rounded-full absolute transition-all duration-200 transform ${
							darkMode
								? 'translate-x-4'
								: '-translate-x-4'
						} bg-primary-foreground`}
					></div>
					<div className="flex gap-x-2 px-2">
						<div
							className={`z-10 flex h-6 w-6 items-center justify-center ${
								darkMode
									? 'text-muted-foreground'
									: 'text-primary'
							} `}
						>
							<BsSun size={17} />
						</div>
						<div
							className={`z-10 flex h-6 w-6 items-center justify-center ${
								darkMode
									? 'text-primary'
									: 'text-secondary'
							} `}
						>
							<BsMoonStars size={16} />
						</div>
					</div>
				</div>
			</label>
		</>
	);
};

export default ToggleDarkMode;
