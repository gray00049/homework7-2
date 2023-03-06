export default function CheckView(Component, NewTitle, PopularTitle) {
  function Wrapper(props) {
    if (props.views > 1000) {
      return (
        <PopularTitle>
          <Component {...props} />
        </PopularTitle>
      )
    } else if (props.views < 100) {
      return (
        <NewTitle>
          <Component {...props} />
        </NewTitle>
      )
    } else {
      return <Component {...props} />
    }
  }

  return Wrapper;
}