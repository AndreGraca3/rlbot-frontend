function Comment({ username, text, index }) {
  return (
    <div className="comment relative flex items-start mb-4">
      <img
        src="https://i.imgur.com/jHN9DeF.png"
        alt={`${username}'s avatar`}
        style={{ animationDelay: `${(index + 1) * 0.03}s` }}
        className="avatar w-12 h-12 rounded-full mr-4 animate-pop-up"
      />
      <div
        style={{ animationDelay: `${(index + 1) * 0.05}s` }}
        className="comment-content bg-gray-700 border p-4 rounded-lg relative animate-pop-up"
      >
        <span className="username font-bold">{username}</span>
        <p className="text mt-2">{text}</p>
      </div>
    </div>
  );
}

export default Comment;
