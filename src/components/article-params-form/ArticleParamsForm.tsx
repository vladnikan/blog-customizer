import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import {
	OptionType,
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	fontSizeOptions,
	contentWidthArr,
} from 'src/constants/articleProps';

type Props = {
	font: OptionType;
	setFont: (opt: OptionType) => void;
	fontColor: OptionType;
	setFontColor: (opt: OptionType) => void;
	backgroundColor: OptionType;
	setBackgroundColor: (opt: OptionType) => void;
	width: OptionType;
	setWidth: (opt: OptionType) => void;
	fontSize: OptionType;
	setFontSize: (opt: OptionType) => void;
	handleReset: () => void;
	handleApply: () => void;
};

export const ArticleParamsForm = ({
	font,
	setFont,
	fontColor,
	setFontColor,
	backgroundColor,
	setBackgroundColor,
	width,
	setWidth,
	fontSize,
	setFontSize,
	handleReset,
	handleApply,
}: Props) => {
	const [isOpen, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!isOpen);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleClick} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form}>
					<Select
						title='Шрифт'
						selected={font}
						options={fontFamilyOptions}
						onChange={setFont}></Select>

					<RadioGroup
						name={'Размер шрифта'}
						options={fontSizeOptions}
						selected={fontSize}
						title={'Размер шрифта'}
						onChange={setFontSize}></RadioGroup>

					<Select
						title='цвет шрифта'
						selected={fontColor}
						options={fontColors}
						onChange={setFontColor}></Select>

					<Separator></Separator>

					<Select
						title='цвет фона'
						selected={backgroundColor}
						options={backgroundColors}
						onChange={setBackgroundColor}></Select>

					<Select
						title='ширина контента'
						selected={width}
						options={contentWidthArr}
						onChange={setWidth}></Select>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='button'
							type='clear'
							onClick={handleReset}
						/>
						<Button
							title='Применить'
							htmlType='button'
							type='apply'
							onClick={handleApply}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
