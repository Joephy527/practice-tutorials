import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import { db } from "@/lib/db";

const getPost = async (id: string) => {
  const response = await db.post.findFirst({
    where: { id: id },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });

  return response;
};

const BlogDetailPage = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(params.id);

  return (
    <section>
      <BackButton />

      <div className="mb-8">
        <h1 className="text-2xl font-bold my-4">{post?.title}</h1>

        <ButtonAction id={params.id} />
      </div>

      <span className="badge badge-neutral">{post?.tag.name}</span>

      <p className="text-slate-700">{post?.content}</p>
    </section>
  );
};

export default BlogDetailPage;
