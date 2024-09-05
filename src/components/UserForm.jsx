import {
  useEffect,
  useState
} from "react";

export default function UserForm({
  onSubmit,
  onCancel,
  user
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [players, setPlayers] = useState("");
  const [duration, setDuration] = useState("");
  const [shelf, setShelf] = useState("");
  const [image, setImage] = useState(""); // Added missing state for image

  useEffect(() => {
      if (user) {
          user.name && setName(user.name); // if user.name is true, set the name state with the user.name value
          user.category && setCategory(user.category); // if user.category is true, set the category state with the user.category value
          user.players && setPlayers(user.players); // if user.players is true, set the players state with the user.players value
          user.duration && setDuration(user.duration); // if user.duration is true, set the duration state with the user.duration value
          user.shelf && setShelf(user.shelf); // if user.shelf is true, set the shelf state with the user.shelf value
          user.image && setImage(user.image); // if user.image is true, set the image state with the user.image value
      }
  }, [user]);

  function handleOnSubmit(event) {
      event.preventDefault();
      // validate the form
      if (!name || !category || !players || !duration || !shelf) {
          alert("Please fill out all the fields");
          return;
      } else if (!image) {
          alert("Please paste an image URL");
          return;
      } else if (!image.startsWith("http")) {
          alert("Please paste a valid image URL");
          return;
      }
      const user = {
          // key/name: value from state,
          name: name,
          category: category,
          players: players,
          duration: duration,
          shelf: shelf,
          image: image
      };
      onSubmit(user);
  }

  return (
      <form onSubmit={handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input
              id="name"
              type="text"
              value={name}
              placeholder="Type a name"
              onChange={e => setName(e.target.value)}
          />

          <label htmlFor="category">Category</label>
          <input
              id="category"
              type="text"
              value={category}
              placeholder="Type a category"
              onChange={e => setCategory(e.target.value)}
          />

          <label htmlFor="players">Players</label>
          <input
              id="players"
              type="text" // Changed from `type="players"` to `type="text"`
              value={players}
              placeholder="Type amount of players"
              onChange={e => setPlayers(e.target.value)}
          />

          <label htmlFor="duration">Duration</label>
          <input
              id="duration"
              type="text" // Changed from `type="duration"` to `type="text"`
              value={duration}
              placeholder="Type duration"
              onChange={e => setDuration(e.target.value)}
          />

          <label htmlFor="shelf">Shelf</label>
          <input
              id="shelf"
              type="text" // Changed from `type="shelf"` to `type="text"`
              value={shelf}
              placeholder="Type a shelf"
              onChange={e => setShelf(e.target.value)}
          />

          <label htmlFor="image">Image URL</label>
          <input
              id="image" // Added missing `id` for label
              type="url"
              value={image}
              placeholder="Paste image url"
              onChange={e => setImage(e.target.value)}
          />

          <label htmlFor="image-preview">Image Preview</label> {/* Added missing label content */}
          <img
              id="image-preview"
              className="image-preview"
              src={image ? image : "https://placehold.co/600x400?text=Paste+an+image+URL"}
              alt="Preview"
              onError={e => (e.target.src = "https://placehold.co/600x400?text=Error+loading+image")}
          />

          <div className="btns">
              <button type="button" className="btn-cancel" onClick={onCancel}>
                  Cancel
              </button>
              <button type="submit">{user ? "Save" : "Create"}</button> {/* Added type="submit" */}
          </div>
      </form>
  );
}
