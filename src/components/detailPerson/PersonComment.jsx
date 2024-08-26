import PropTypes from "prop-types";

const PersonComment = ({ comment, user }) => {
  return (
    <div className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg lg:col-span-3 md:col-span-2 rounded-lg">
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="text-xl flex items-center gap-2">
          <div className="py-8 pl-4" />
          Comentarios
        </div>
      </div>
      <div className="">
        <div className="bg-white p-4 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-600 italic">{comment}</p>
          <p className="text-right mt-2 text-sm font-medium text-slate-700">
            {user.displayName || user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

PersonComment.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonComment;
