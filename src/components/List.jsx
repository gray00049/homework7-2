import Video from "./Video";
import Article from "./Article";
import New from "./New";
import Popular from "./Popular";
import CheckView from "./CheckView";

export default function List(props) {
  return props.list.map(item => {
      let WithCheck;
      switch (item.type) {
          case 'video':
              WithCheck = CheckView(Video, New, Popular);
              return (
                  <WithCheck {...item} />
              );
          case 'article':
              WithCheck = CheckView(Article, New, Popular);
              return (
                  <WithCheck {...item} />
              );
      }
  });
};