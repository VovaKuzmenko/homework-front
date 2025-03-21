import { ChangeEvent } from 'react';

type InputPropsType = {
  // currentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
  currentText: string
  // setCurrentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
  setCurrentText: Function
};

export const Input = (props: InputPropsType) => {
  // const onChangeHandler = (event: 'НУЖНО ПРОТИПИЗИРОВАТЬ') => {
  //   // НУЖНО ДОПИСАТЬ
  // };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setCurrentText(event.currentTarget.value)
    // console.log(props.currentText)
  };

  return (
    <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
  );
};
