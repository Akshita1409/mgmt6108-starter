import React, { useState, useEffect } from 'react';
import { Article } from '../data/articles';
import {
  X,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  Clock,
  Sparkles,
  Send
} from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onShare: () => void;
  onSelectArticle: (article: Article) => void;
  relatedArticles: Article[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onShare,
  onSelectArticle,
  relatedArticles,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [comments, setComments] = useState<Array<{ id: string; author: string; time: string; text: string; likes: number }>>([
    {
      id: 'c1',
      author: 'David Tan, Tech Investor',
      time: '1 hour ago',
      text: 'Essential reading. The speed of iteration in frontier reasoning models is dramatically altering capital deployment strategies in Southeast Asia.',
      likes: 14,
    },
    {
      id: 'c2',
      author: 'Dr. Meera Krishnan',
      time: '2 hours ago',
      text: 'Crucial that Singapore continues developing sovereign Asian language benchmarks so we do not become dependent solely on Western contextual filters.',
      likes: 9,
    }
  ]);
  const [newComment, setNewComment] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Audio simulation timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingAudio) {
      timer = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 2;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlayingAudio]);

  if (!article) return null;

  const fontClasses = {
    normal: 'text-base sm:text-lg leading-relaxed',
    large: 'text-lg sm:text-xl leading-relaxed',
    xlarge: 'text-xl sm:text-2xl leading-relaxed',
  }[fontSize];

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      {
        id: Date.now().toString(),
        author: 'You (ST Reader)',
        time: 'Just now',
        text: newComment.trim(),
        likes: 0,
      },
      ...comments,
    ]);
    setNewComment('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl min-h-screen sm:min-h-0 sm:rounded-lg shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-200">
        {/* Sticky Reader Navigation Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between z-20">
          <button
            onClick={onClose}
            className="flex items-center space-x-1.5 text-xs font-semibold text-gray-700 hover:text-[#002663] transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to AI news</span>
          </button>

          {/* Reader Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Font size switcher */}
            <div className="flex items-center border border-gray-200 rounded text-xs font-serif overflow-hidden">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 ${fontSize === 'normal' ? 'bg-gray-100 font-bold text-[#002663]' : 'text-gray-600 hover:bg-gray-50'}`}
                title="Normal font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 text-sm border-l border-gray-200 ${fontSize === 'large' ? 'bg-gray-100 font-bold text-[#002663]' : 'text-gray-600 hover:bg-gray-50'}`}
                title="Large font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 text-base border-l border-gray-200 ${fontSize === 'xlarge' ? 'bg-gray-100 font-bold text-[#002663]' : 'text-gray-600 hover:bg-gray-50'}`}
                title="Extra large font size"
              >
                A
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={onToggleBookmark}
              className={`p-1.5 rounded hover:bg-gray-100 transition cursor-pointer ${
                isBookmarked ? 'text-[#002663]' : 'text-gray-600'
              }`}
              title={isBookmarked ? 'Saved to bookmarks' : 'Save article'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={onShare}
              className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition cursor-pointer"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition cursor-pointer ml-1"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Container */}
        <div className="p-5 sm:p-8 md:p-10 max-w-3xl mx-auto w-full">
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold uppercase tracking-wider text-[#002663] mb-3 flex items-center space-x-2">
            <span>Tech</span>
            <span className="text-gray-300">/</span>
            <span>Artificial Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="headline-font text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>

          {/* Deck / Summary */}
          {article.summary && (
            <p className="mt-3 text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
              {article.summary}
            </p>
          )}

          {/* Byline / Dateline */}
          <div className="mt-5 pb-5 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-gray-600">
            <div>
              <span className="font-bold text-gray-900">{article.author || 'Straits Times Tech Bureau'}</span>
              {article.authorRole && (
                <span className="block text-gray-500">{article.authorRole}</span>
              )}
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <Clock className="w-3.5 h-3.5" />
              <span>Published {article.timeAgo}</span>
              <span>•</span>
              <span>{article.readTime || '4 min read'}</span>
            </div>
          </div>

          {/* Listen to this article bar */}
          <div className="my-5 p-3.5 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-8 h-8 rounded-full bg-[#002663] text-white flex items-center justify-center hover:bg-[#0b2046] transition cursor-pointer flex-shrink-0"
              >
                {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
              <div>
                <p className="text-xs font-bold text-gray-900">
                  {isPlayingAudio ? 'Listening to audio version...' : 'Listen to this article'}
                </p>
                <p className="text-[11px] text-gray-500">Voice narration by ST Digital (3:15)</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 w-36">
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#002663] h-full transition-all duration-300"
                  style={{ width: `${audioProgress}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-500 font-mono">1.0x</span>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="my-6">
            <div className="overflow-hidden rounded-sm bg-gray-100 max-h-[460px]">
              <img
                src={article.imageUrl}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500 leading-normal">
              {article.caption || `${article.imageAlt}. PHOTO: THE STRAITS TIMES`}
            </figcaption>
          </figure>

          {/* Key Points Box (if available) */}
          {article.keyPoints && article.keyPoints.length > 0 && (
            <div className="my-6 p-4 bg-sky-50/60 border-l-4 border-[#002663] rounded-r-sm">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-[#002663] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Takeaways</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-800 list-disc pl-4">
                {article.keyPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Text Paragraphs */}
          <div className={`article-body-font text-gray-800 space-y-5 my-8 ${fontClasses}`}>
            {article.content && article.content.length > 0 ? (
              article.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-[#002663] first-letter:float-left first-letter:mr-3 first-letter:leading-none' : ''}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p>
                {article.summary} Additional reporting and commentary for this breaking story are being compiled by The Straits Times newsroom.
              </p>
            )}
          </div>

          {/* Reader Feedback / Reactions */}
          <div className="pt-6 pb-8 border-t border-b border-gray-200 my-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1.5 text-xs text-gray-600 hover:text-[#002663] border border-gray-200 px-3 py-1.5 rounded-full transition">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Helpful (42)</span>
              </button>
              <button
                onClick={onShare}
                className="flex items-center space-x-1.5 text-xs text-gray-600 hover:text-[#002663] border border-gray-200 px-3 py-1.5 rounded-full transition"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
            <div className="text-xs text-gray-500">
              Join the conversation below
            </div>
          </div>

          {/* Comments Section */}
          <div className="my-8">
            <h3 className="font-bold text-gray-900 text-lg flex items-center space-x-2 mb-4">
              <MessageSquare className="w-4 h-4 text-[#002663]" />
              <span>Reader Discussion ({comments.length})</span>
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your perspective on this development..."
                rows={3}
                className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded focus:ring-1 focus:ring-[#002663] focus:border-[#002663] outline-none"
              />
              <div className="mt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="bg-[#002663] disabled:opacity-50 text-white text-xs font-semibold px-4 py-2 rounded flex items-center space-x-1.5 hover:bg-[#0b2046] transition cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Post comment</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="p-3.5 bg-gray-50 rounded border border-gray-100 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                    <span className="font-bold text-gray-900">{comment.author}</span>
                    <span>{comment.time}</span>
                  </div>
                  <p className="text-gray-700 leading-normal">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* More On This Topic */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t-2 border-[#002663]">
              <h3 className="text-base font-bold text-[#002663] uppercase tracking-wider mb-4">
                More on this topic
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.slice(0, 2).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="p-3 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 cursor-pointer transition flex flex-col justify-between"
                  >
                    <p className="headline-font font-bold text-gray-900 hover:text-[#002663] text-sm leading-snug line-clamp-2">
                      {rel.title}
                    </p>
                    <span className="text-[11px] text-gray-500 mt-2">{rel.timeAgo}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
