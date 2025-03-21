type ButtonPropsType = {
  // callBack: any // НУЖНО ПРОТИПИЗИРОВАТЬ
  callBack: Function // НУЖНО ПРОТИПИЗИРОВАТЬ
  // name: any // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: any // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    // НУЖНО ДОПИСАТЬ
    props.callBack()
    // console.log(props.callBack())
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
