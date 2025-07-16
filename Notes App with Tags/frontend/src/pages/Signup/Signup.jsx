const handleSignUp = async (e) => {
  e.preventDefault();

  if (!name) {
    setError("Please enter your name");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email address");
    return;
  }

  if (!password) {
    setError("Please enter the password");
    return;
  }

  setError("");

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/signup`,
      { username: name, email, password },
      { withCredentials: true }
    );

    if (res.data.success === false) {
      setError(res.data.message);
      toast.error(res.data.message);
      return;
    }

    toast.success(res.data.message);
    setError("");
    navigate("/login");
  } catch (error) {
    toast.error(error.message);
    setError(error.message);
  }
};
