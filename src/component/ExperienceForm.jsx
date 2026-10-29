const ExperienceForm = ({ onClose, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    onSave({
      title: form.title.value,
      organization: form.organization.value,
      location: form.location.value,
      locationType: form.locationType.value,
      employmentType: form.employmentType.value,
      startMonth: form.startMonth.value,
      startYear: form.startYear.value,
      endMonth: form.endMonth.value,
      endYear: form.endYear.value,
      currentlyWorking: form.currentlyWorking.checked,
      highlights: form.highlights.value,
      skills: form.skills.value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-3">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Edit experience</h2>
          <button type="button" onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Notify network */}
          <div className="bg-slate-100 p-4 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Notify network</p>
              <p className="text-xs text-gray-500 mt-1">
                Notify your network of key profile changes.
              </p>
            </div>
            <input type="checkbox" name="notifyNetwork" defaultChecked />
          </div>

          <h3 className="font-semibold">Role details</h3>

          {/* Job title and organization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Job title*</label>
              <input
                name="title"
                required
                placeholder="Web Development Trainee"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Organization*</label>
              <input
                name="organization"
                required
                placeholder="Company name"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Location</label>
              <input
                name="location"
                placeholder="Mohali district, India"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Location type</label>
              <select name="locationType" className="w-full border rounded p-2">
                <option>On-site</option>
                <option selected>Hybrid</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Employment type</label>
              <select
                name="employmentType"
                className="w-full border rounded p-2"
              >
                <option value="">Select employment type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Trainee</option>
                <option>Contract</option>
                <option>Freelance</option>
              </select>
            </div>
          </div>

          {/* Current role */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="currentlyWorking" defaultChecked />I am
            currently working in this role
          </label>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Start month*</label>
              <select
                name="startMonth"
                required
                className="w-full border rounded p-2"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option selected>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Start year*</label>
              <select
                name="startYear"
                required
                className="w-full border rounded p-2"
              >
                <option>2024</option>
                <option>2025</option>
                <option selected>2026</option>
                <option>2027</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">End month</label>
              <select name="endMonth" className="w-full border rounded p-2">
                <option value="">Select month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">End year</label>
              <select name="endYear" className="w-full border rounded p-2">
                <option value="">Select year</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <label className="block text-sm mb-1">Highlights</label>
            <textarea
              name="highlights"
              rows="5"
              maxLength="2000"
              placeholder="Describe your responsibilities and achievements..."
              className="w-full border rounded p-3"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm mb-1">Skills</label>
            <input
              name="skills"
              placeholder="React.js, JavaScript, Node.js"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border rounded-full px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-700 text-white rounded-full px-6 py-2 font-semibold hover:bg-blue-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceForm;
