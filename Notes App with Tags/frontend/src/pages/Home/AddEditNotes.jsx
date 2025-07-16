const editNote = async () => {
  const noteId = noteData._id;

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/note/edit/` + noteId,
      { title, content, tags },
      { withCredentials: true }
    );

    if (res.data.success === false) {
      setError(res.data.message);
      toast.error(res.data.message);
      return;
    }

    toast.success(res.data.message);
    getAllNotes();
    onClose();
  } catch (error) {
    toast.error(error.message);
    setError(error.message);
  }
};
