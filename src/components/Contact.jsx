export default function Contact() {
  return (
    <div className="w-[80%] flex flex-col justify-start gap-14 py-4 ">
      {/* heading */}
      <div className="text-6xl font-bold flex gap-4 w-full">
        <h3>Contact</h3>
        <h3 className="text-orange-600">Me</h3>
      </div>

      {/* content container*/}
      <div className="w-full flex flex-col items-center justify-between gap-8">
      <form name="contact v1" method="post" data-netlify='true'
      onSubmit='submit'
      >
          <input type="hidden" name="form-name" value="contact v1"  />
          <p>
            <label>Your Name: <input className="text-black" type="text" name="name"/></label>
          </p>
          <p>
            <label htmlFor="email">Your Email: </label><br />
            <input className="text-black" id="email" type="email" name="email"/>
          </p>
          <p>
            <label>Message: <textarea className="text-black" name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send Data</button>
          </p>
        </form>
      </div>
    </div>
  );
}
