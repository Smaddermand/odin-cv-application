export default function GeneralInformation({ personalInfo, setPersonalInfo }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <label htmlFor="fullname">Full name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={personalInfo.fullname}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={personalInfo.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={personalInfo.phone}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
