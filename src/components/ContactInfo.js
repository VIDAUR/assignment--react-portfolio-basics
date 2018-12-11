
import  React, {Component} from "react"; 

class ContactInfo extends Component {
	render() {
		return(

		<section>
          <div className="contactinfo">
            <a className="contactinfo__single" target="_blank" href="">
              <i className="ion-ios-location-outline contactinfo__icon"></i>
              <span className="contactinfo__title">Ciudad de México, MEX</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-ios-email-outline contactinfo__icon"></i>
              <span className="contactinfo__title">edgarcv@mail.com</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-social-github-outline contactinfo__icon"></i>
              <span className="contactinfo__title">VIDAUR</span>
            </a>
            <a href="#" className="contactinfo__single" target="_blank">
              <i className="ion-social-linkedin-outline contactinfo__icon"></i>
              <span className="contactinfo__title">Edgar Cortes</span>
            </a>
          </div>
        </section>
			
			)
	}
}

export default ContactInfo;
