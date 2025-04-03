interface BasicInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
}

interface BasicInfoFormProps {
  basicInfo: BasicInfo;
  onChange: (info: BasicInfo) => void;
}

export default function BasicInfoForm({ basicInfo, onChange }: BasicInfoFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Nome</label>
          <input
            type="text"
            value={basicInfo.name}
            onChange={(e) => onChange({ ...basicInfo, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Título</label>
          <input
            type="text"
            value={basicInfo.title}
            onChange={(e) => onChange({ ...basicInfo, title: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-2">Bio</label>
        <textarea
          value={basicInfo.bio}
          onChange={(e) => onChange({ ...basicInfo, bio: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300 h-32 resize-none"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            value={basicInfo.email}
            onChange={(e) => onChange({ ...basicInfo, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Telefone</label>
          <input
            type="tel"
            value={basicInfo.phone}
            onChange={(e) => onChange({ ...basicInfo, phone: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Localização</label>
          <input
            type="text"
            value={basicInfo.location}
            onChange={(e) => onChange({ ...basicInfo, location: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
} 