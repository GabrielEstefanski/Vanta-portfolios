interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
}

interface CertificateFormProps {
  certificates: Certificate[];
  onChange: (certificates: Certificate[]) => void;
  onAdd: () => void;
}

export default function CertificateForm({ certificates, onChange, onAdd }: CertificateFormProps) {
  return (
    <div className="space-y-6">
      {certificates.map((cert) => (
        <div key={cert.id} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nome do Certificado</label>
              <input
                type="text"
                value={cert.name}
                onChange={(e) => {
                  const newCertificates = certificates.map((c) =>
                    c.id === cert.id ? { ...c, name: e.target.value } : c
                  );
                  onChange(newCertificates);
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Instituição</label>
              <input
                type="text"
                value={cert.issuer}
                onChange={(e) => {
                  const newCertificates = certificates.map((c) =>
                    c.id === cert.id ? { ...c, issuer: e.target.value } : c
                  );
                  onChange(newCertificates);
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Data</label>
              <input
                type="text"
                value={cert.date}
                onChange={(e) => {
                  const newCertificates = certificates.map((c) =>
                    c.id === cert.id ? { ...c, date: e.target.value } : c
                  );
                  onChange(newCertificates);
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Link do Certificado</label>
              <input
                type="url"
                value={cert.link}
                onChange={(e) => {
                  const newCertificates = certificates.map((c) =>
                    c.id === cert.id ? { ...c, link: e.target.value } : c
                  );
                  onChange(newCertificates);
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={onAdd}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
      >
        Adicionar Certificado
      </button>
    </div>
  );
} 