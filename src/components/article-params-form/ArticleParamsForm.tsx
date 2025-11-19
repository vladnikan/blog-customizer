import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, useEffect } from 'react';

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
import { Text } from 'src/ui/text';

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

	useEffect(() => {
		const handleClose = (e: MouseEvent) => {
			const target = e.target as Element;
			if (!target.closest(`.${styles.container}`)) {
				setOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClose);
		return () => document.removeEventListener('mousedown', handleClose);
	}, []);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleClick} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						handleApply();
					}}>
					<Text as='h2' size={31} weight={800} uppercase>
						задайте параметры
					</Text>
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
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
