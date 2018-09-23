import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Container, Col, Card, CardImage, CardBody} from 'mdbreact';

function PartiMain() {
  const Dataitem = [
      {
          name: "Leonardo",
          Prix:'250',
          imgUrl: "http://www.tunisianet.com.tn/105103-home/pc-portable-lenovo-legion-y520-i7-7e-gen-8-go.jpg",
          description:'qndnqslnqlkqùlkqkq'
      },
      {
        name: "Leonardo",
        Prix:'250',
        imgUrl: "http://www.tunisianet.com.tn/105103-home/pc-portable-lenovo-legion-y520-i7-7e-gen-8-go.jpg",
        description:'qndnqslnqlkqùlkqkq'
    },
    {
      name: "Leonardo",
      Prix:'250',
      imgUrl: "http://www.tunisianet.com.tn/105103-home/pc-portable-lenovo-legion-y520-i7-7e-gen-8-go.jpg",
      description:'qndnqslnqlkqùlkqkq'
  },
  {
    name: "Leonardo",
    Prix:'250',
    imgUrl: "http://www.tunisianet.com.tn/105103-home/pc-portable-lenovo-legion-y520-i7-7e-gen-8-go.jpg",
    description:'qndnqslnqlkqùlkqkq'
},
{
  name: "Leonardo",
  Prix:'250',
  imgUrl: "http://www.tunisianet.com.tn/105103-home/pc-portable-lenovo-legion-y520-i7-7e-gen-8-go.jpg",
  description:'qndnqslnqlkqùlkqkq'
},
{
  name: "Leonardo",
  Prix:'250',
  imgUrl: "http://www.tunisianet.com.tn/105103-home/pc-portable-lenovo-legion-y520-i7-7e-gen-8-go.jpg",
  description:'qndnqslnqlkqùlkqkq'
},
{
  name: "Leonardo",
  Prix:'250',
  imgUrl: "http://www.tunisianet.com.tn/105103-home/pc-portable-lenovo-legion-y520-i7-7e-gen-8-go.jpg",
  description:'qndnqslnqlkqùlkqkq'
},
{
  name: "Leonardo",
  Prix:'250',
  imgUrl: "http://www.tunisianet.com.tn/105103-home/pc-portable-lenovo-legion-y520-i7-7e-gen-8-go.jpg",
  description:'qndnqslnqlkqùlkqkq'
},
    
  ]




  const items = Dataitem.map((Dataitem , index) =>   <Col className="col-sm-6 col-md-3" key={Dataitem .name + index} >
          <span className=" breadcrumb" style={{ marginBottom: "0px" ,width:'247px',backgroundColor:'#888d92'}}><span style={{ fontWeight: "500", margin: "auto", color: "black" }}>{Dataitem.name}</span></span>

            <Card className="mb-2">

              <CardImage className="img-fluid" src={Dataitem.imgUrl+'?set2&size=200x200'} width="200px" height="200px" />
              <CardBody>

                <span style={{ fontSize: '18px', fontWeight: "500", margin: "auto",color:'black' }} >Price:{Dataitem.Prix}</span>


                <div className="btn-group btn-group-sm pull-right " role="group" style={{ margin: "auto",height: "27px" }} >

                  <a className="btn btn-red btn-sm" title="Remove" role="button"   ><span className="fa fa-times" style={{ width: "0px",marginTop: "0px" }} ></span></a>{/*onClick={() => actions.removeItem(item.id)} */}
                  <a className="btn btn-orange btn-sm" title="Edit" role="button" ><span className="fa fa-edit" style={{ width: "0px" ,marginTop: "0px"}}></span></a>
                  <a className="btn btn-blue btn-sm " title="Detail" role="button"><span className="fa fa-eye" style={{ width: "0px",marginTop: "0px" }}></span></a>
                  <a className="btn  btn-blue btn-sm" title='ADD TO Cart' role="button"><span className='fa fa-shopping-cart' style={{ width: "0px",marginTop: "0px"}}></span></a>
                </div>
              </CardBody>
            </Card>
          </Col>
       
      
         
     
      
  )
  

return ( <div  >
  <div class="btn-group-sm btn-group " role="group" aria-label="Button group with nested dropdown" style={{ margin:'15px 15px' }}>
  <button type="button" className="btn btn-primary" title="To page 1" >«</button>
    <button type="button" className="btn btn-primary" >1</button>
    <button type="button" className="btn btn-primary">2</button>
    <button type="button" className="btn btn-primary">3</button>
    <button type="button" className="btn btn-primary">4</button>

    <button type="button" className="btn btn-primary" title="To page 1" > »</button>

     </div>
      <Container style={{ display: "flex", height: "100%", width: "100%", flexWrap: "wrap",margin:'50px' }}>
       {items}
      </Container>
      </div>
)
}

export default PartiMain;

