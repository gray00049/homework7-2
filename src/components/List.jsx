import Video from "./Video";
import Article from "./Article";
import New from "./New";
import Popular from "./Popular";

export default function List(props) {
  return props.list.map(item => {
      switch (item.type) {
          case 'video':
            if (item.views >= 1000) {
              return (
                <Popular>
                  <Video {...item} />
                </Popular>
              );
            } else if (item.views < 100) {
              return (
                <New>
                  <Video {...item} />
                </New>
              );
            } else {
              return (
                <Video {...item} />
              )
            }
              

          case 'article':
            if (item.views >= 1000) {
              return (
                <Popular>
                  <Article {...item} />
                </Popular>
              );
            } else if (item.views < 100) {
              return (
                <New>
                  <Article {...item} />
                </New>
              );
            } else {
              return (
                <Article {...item} />
              )
            }
      }
  });
};