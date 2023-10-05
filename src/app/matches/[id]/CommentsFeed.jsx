export default async function CommentsFeed({ fetcher }) {
  const comments = await fetcher();

  const handleSubmitComment = () => {};

  return (
    <div className="comments-feed my-auto max-w-2xl mx-2 mt-10">
      <p className="opacity-90">{comments.length} comments</p>

      <div className="ml-2 my-6 flex gap-4 items-center">
        <textarea
          placeholder="Add a comment..."
          className="border-b border-blue-500 focus:outline-none p-2 w-full bg-transparent resize-none overflow-y-auto"
        />
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          {">"}
        </button>
      </div>

      {comments.map((comment, i) => (
        <Comment
          key={comment.id}
          username={comment.username}
          text={comment.text}
          index={i}
        />
      ))}
    </div>
  );
}
