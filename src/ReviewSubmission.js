export default function UserSubmission() {
  return (
    <form>
      <label>
        Campsite Name:
        <input type="text" name="name" autoFocus />
      </label>
      <label>
        Address:
        <input type="text" name="address" />
      </label>
      <label>
        Town
        <input type="text" name="town" />
      </label>
      <br />
      <div className="row">
        <div className="col-sm-2">
          <label>
            Vibe:
            <input type="number" name="vibe" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Amentities:
            <input type="number" name="amenities" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Location:
            <input type="number" name="location" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Comfort:
            <input type="number" name="comfort" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Views:
            <input type="number" name="views" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Value:
            <input type="number" name="views" min={1} max={5} />
          </label>
        </div>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
