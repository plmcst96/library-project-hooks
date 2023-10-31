import { Alert } from "react-bootstrap"

const Welcome = function(){
    return(
        <Alert variant="info" className="my-3 mx-5">
        <Alert.Heading><strong>Hey, nice to see you!</strong></Alert.Heading>
        <p>
          Aww yeah, here you are on the best-stocked book site on the web!
        </p>
        <hr />
        <p className="mb-0">
        <em>“Books are the quietest and most constant friends, and the most patient teachers.”</em> <strong>Charles W. Eliot</strong>
        </p>
      </Alert>
    )
}

export default Welcome