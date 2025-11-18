import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [font, setFont] = useState<OptionType>(fontFamilyOptions[0]);
	const [fontColor, setFontColor] = useState<OptionType>(fontColors[0]);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		backgroundColors[0]
	);
	const [width, setWidth] = useState<OptionType>(contentWidthArr[0]);
	const [fontSize, setFontSize] = useState<OptionType>(fontSizeOptions[0]);

	const [actualFont, setActualFont] = useState<OptionType>(
		fontFamilyOptions[0]
	);
	const [actualFontColor, setActualFontColor] = useState<OptionType>(
		fontColors[0]
	);
	const [actualBackgroundColor, setActualBackgroundColor] =
		useState<OptionType>(backgroundColors[0]);
	const [actualWidth, setActualWidth] = useState<OptionType>(
		contentWidthArr[0]
	);
	const [actualFontSize, setActualFontSize] = useState<OptionType>(
		fontSizeOptions[0]
	);

	const handleApply = () => {
		setActualFont(font);
		setActualFontColor(fontColor);
		setActualBackgroundColor(backgroundColor);
		setActualWidth(width);
		setActualFontSize(fontSize);
	};

	const handleReset = () => {
		setFont(fontFamilyOptions[0]);
		setFontColor(fontColors[0]);
		setBackgroundColor(backgroundColors[0]);
		setWidth(contentWidthArr[0]);
		setFontSize(fontSizeOptions[0]);

		setActualFont(fontFamilyOptions[0]);
		setActualFontColor(fontColors[0]);
		setActualBackgroundColor(backgroundColors[0]);
		setActualWidth(contentWidthArr[0]);
		setActualFontSize(fontSizeOptions[0]);
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': actualFont.value,
					'--font-size': actualFontSize.value,
					'--font-color': actualFontColor.value,
					'--container-width': actualWidth.value,
					'--bg-color': actualBackgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				font={font}
				setFont={setFont}
				fontColor={fontColor}
				setFontColor={setFontColor}
				backgroundColor={backgroundColor}
				setBackgroundColor={setBackgroundColor}
				width={width}
				setWidth={setWidth}
				fontSize={fontSize}
				setFontSize={setFontSize}
				handleReset={handleReset}
				handleApply={handleApply}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
