'use client';

import { TranslationLanguages } from '@/app/translate/page';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { useFormState } from 'react-dom';
import { useState } from 'react';

const initialState = {
	inputLanguage: 'auto',
	outputLanguage: 'es',
	input: '',
	output: '',
};

export type State = typeof initialState;

const TranslationForm = ({
	languages,
}: {
	languages: TranslationLanguages;
}) => {
	const [state, formAction] = useFormState(translate, initialState);
	const [intput, setInput] = useState('');
	const [output, setOutput] = useState('');

	return (
		<div>
			<form
				action={formAction}
				className="flex flex-col justify-center items-center w-full gap-y-4"
			>
				<div className="flex flex-col lg:flex-row gap-4 w-full">
					<div className="flex flex-col gap-4 w-full lg:w-1/2">
						<Select
							name="inputLanguage"
							defaultValue="auto"
						>
							<SelectTrigger className="w-[250px]">
								<SelectValue placeholder="Select a language" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>
										Want us to figure
										out ?
									</SelectLabel>
									<SelectItem
										value="auto"
										key="auto"
									>
										Auto-Detection
									</SelectItem>
								</SelectGroup>
								<SelectGroup>
									<SelectLabel>
										Languages
									</SelectLabel>
									{Object.keys(
										languages.translation
									).map((key) => (
										<SelectItem
											value={key}
											key={key}
										>
											{
												languages
													.translation[
													key
												].name
											}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>

						<Textarea
							placeholder="Type your messsage here."
							className="min-h-32 text-xl"
							name="input"
							value={intput}
							onChange={(e) =>
								setInput(e.target.value)
							}
						/>
					</div>

					<div className="flex flex-col gap-4 w-full lg:w-1/2">
						<Select
							name="outputLanguage"
							defaultValue="es"
						>
							<SelectTrigger className="w-[250px]">
								<SelectValue placeholder="Select a language" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>
										Want us to figure
										out ?
									</SelectLabel>
									<SelectItem
										value="auto"
										key="auto"
									>
										Auto-Detection
									</SelectItem>
								</SelectGroup>
								<SelectGroup>
									<SelectLabel>
										Languages
									</SelectLabel>
									{Object.keys(
										languages.translation
									).map((key) => (
										<SelectItem
											value={key}
											key={key}
										>
											{
												languages
													.translation[
													key
												].name
											}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>

						<Textarea
							placeholder="Type your messsage here."
							className="min-h-32 text-xl"
							name="output"
							value={output}
							onChange={(e) =>
								setOutput(e.target.value)
							}
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300 drop-shadow-1xl"
					>
						Translate
					</button>
				</div>
			</form>
		</div>
	);
};

export default TranslationForm;
