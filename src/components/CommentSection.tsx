import { useState } from 'react';
import { Star } from 'lucide-react';
import { Comment } from '../types';

interface CommentSectionProps {
  productId: number;
  comments: Comment[];
}

export default function CommentSection({ productId, comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      userId: 1, // In a real app, this would come from auth
      productId,
      userName: 'John Doe', // In a real app, this would come from auth
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating,
      text: newComment,
      date: new Date().toISOString(),
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setRating(5);
  };

  return (
    <div className="mt-16">
      <h3 className="text-lg font-medium text-gray-900">Write a Review</h3>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(null)}
                onClick={() => setRating(star)}
                className="p-1"
              >
                <Star
                  className={`h-6 w-6 ${
                    star <= (hoveredStar ?? rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">
            Select your rating
          </span>
        </div>
        <div>
          <textarea
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts about this perfume..."
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Post Review
          </button>
        </div>
      </form>

      <div className="mt-8 space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <div className="flex-shrink-0">
              <img
                src={comment.userAvatar}
                alt={comment.userName}
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                <h4 className="text-sm font-medium text-gray-900">{comment.userName}</h4>
                <div className="ml-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < comment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-700">{comment.text}</p>
              <div className="mt-2 flex items-center space-x-4">
                <span className="text-xs text-gray-500">
                  {new Date(comment.date).toLocaleDateString()}
                </span>
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  Helpful ({comment.likes})
                </button>
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}