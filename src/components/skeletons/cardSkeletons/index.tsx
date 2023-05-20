import { CardContainer } from "./styles";
import { Skeleton } from "antd";

export default function CardSkeleton() {
  const skeletonList = () => {
    const skeletons = [];
    for(let i=0; i<5; i++) {
      skeletons.push(
        <li key={i}>
            <article>
              <Skeleton.Button active size="large" />

              <div className="card-content">
                <Skeleton.Button active shape="square" block />
              </div>
            </article>
          </li>
      );
    }
    return skeletons;
  }
  return (
    <CardContainer>
      {skeletonList()}
    </CardContainer>
  )
}