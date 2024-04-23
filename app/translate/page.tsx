import TranslationForm from '@/components/TranslationForm';
import { auth } from '@clerk/nextjs/server';

export type TranslationLanguages = {
	translation: {
		[key: string]: {
			name: string;
			nativeName: string;
			dir: 'ltr' | 'rtl';
		};
	};
};

async function TranslatePage() {
	auth().protect();

	const { userId } = auth();

	const languagesEndpoint =
		'https://api.cognitive.microsofttranslator.com/languages?api-version=3.0';

	const response = await fetch(languagesEndpoint, {
		next: { revalidate: 60 * 60 * 24 }, // cache the result for 24 hours an then refresh
	});
	const languages = (await response.json()) as TranslationLanguages;

	if (!userId) throw new Error('User not authenticated');

	return (
		<>
			<div className="">
				{/* TranslationForm */}
				<TranslationForm languages={languages} />

				{/* TranslationsHistory */}
			</div>
		</>
	);
}

export default TranslatePage;
