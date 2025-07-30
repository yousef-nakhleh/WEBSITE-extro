import { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function WaitingList({ selectedBarberName, selectedServiceName, selectedDate }: {
  selectedBarberName?: string;
  selectedServiceName?: string;
  selectedDate: string;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Generate time options in 10-minute increments
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        times.push(timeString);
      }
    }
    return times;
  };

  // Get current time rounded to nearest 10-minute interval
  const getCurrentTimeRounded = () => {
    const now = new Date();
    const minutes = Math.ceil(now.getMinutes() / 10) * 10;
    const hours = minutes === 60 ? now.getHours() + 1 : now.getHours();
    const adjustedMinutes = minutes === 60 ? 0 : minutes;
    return `${hours.toString().padStart(2, '0')}:${adjustedMinutes.toString().padStart(2, '0')}`;
  };

  // Get default end time (30 minutes after start time)
  const getDefaultEndTime = (startTimeStr: string) => {
    if (!startTimeStr) return "";
    const [hours, minutes] = startTimeStr.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + 30;
    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;
    return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
  };

  const timeOptions = generateTimeOptions();

  // Set default times when modal opens
  const handleOpen = () => {
    const defaultStart = getCurrentTimeRounded();
    setStartTime(defaultStart);
    setEndTime(getDefaultEndTime(defaultStart));
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waiting_list')
        .insert([{
          customer_name: name,
          customer_phone: phone,
          start_time: startTime,
          end_time: endTime,
          date: selectedDate,
          business_id: '6ebf5f92-14ff-430e-850c-f147c3dc16f4'
        }]);

      if (error) {
        console.error('Error inserting into waiting list:', error);
        alert('Errore durante l\'invio della richiesta. Riprova.');
      } else {
        alert('Richiesta inviata con successo! Ti contatteremo se si libera un posto.');
        // Clear form fields
        setName("");
        setPhone("");
        setStartTime("");
        setEndTime("");
        setOpen(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Errore durante l\'invio della richiesta. Riprova.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleStartTimeChange = (newStartTime: string) => {
    setStartTime(newStartTime);
    // Auto-update end time to 30 minutes after start time
    setEndTime(getDefaultEndTime(newStartTime));
  };

  return (
    <div className="text-center">
      <button
        className="bg-gold text-black px-6 py-3 rounded-lg font-heading font-bold transition-all duration-300 hover:bg-opacity-90 shadow-lg hover:shadow-xl"
        onClick={handleOpen}
      >
        Mettiti in lista
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-50 rounded-2xl p-8 w-full max-w-md shadow-lg border-2 border-gray-200 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-heading font-bold text-black mb-2">Lista d'Attesa</h2>
              <div className="w-16 h-[2px] bg-gold mx-auto"></div>
            </div>

            <p className="text-gray-600 font-primary text-sm text-center mb-6">
              Inserisci i tuoi dati e la fascia oraria preferita. Ti contatteremo se si libera un posto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-heading font-semibold text-black mb-2">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  placeholder="Mario Rossi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg font-primary text-black placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-black mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  placeholder="+39 123 456 7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg font-primary text-black placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-black mb-2">
                  Fascia Oraria Preferita
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 font-primary mb-1">Dalle</label>
                    <select
                      value={startTime}
                      onChange={(e) => handleStartTimeChange(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg font-primary text-black focus:border-gold focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Seleziona</option>
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 font-primary mb-1">Alle</label>
                    <select
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg font-primary text-black focus:border-gold focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Seleziona</option>
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-gold transition-colors font-primary font-medium"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="bg-gold text-black px-6 py-3 rounded-lg font-heading font-bold transition-all duration-300 hover:bg-opacity-90 shadow-lg hover:shadow-xl"
                  disabled={submitting}
                >
                  {submitting ? 'Invio...' : 'Invia Richiesta'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}