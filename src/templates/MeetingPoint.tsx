import { Iframe } from '@/component/feature/mapContainer';

const MeetingPoint = () => (
  <div className="antialiased text-gray-600">
    <Iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.699715863952!2d107.00659177478612!3d-6.4326057629037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjUnNTcuNCJTIDEwN8KwMDAnMzMuMCJF!5e0!3m2!1sid!2sid!4v1720597466658!5m2!1sid!2sid"
      title="Google Maps"
      allowFullScreen={true}
      height={450}
      width="100%"
      loading="lazy"
    />
  </div>
);

export { MeetingPoint };
