import { Posts } from "@/types";
import Link from "next/link";

const PostCard = ({ id, title, content, tag }: Posts) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p>{content.slice(0, 30)}</p>

        <div className="card-actions flex items-center justify-end">
          <span className="badge badge-neutral">{tag.name}</span>

          <Link href={`/blog/${id}`} className="hover:underline">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
