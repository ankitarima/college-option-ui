import React, { useState } from "react";

const dummySearch = [{
  "id": 1,
  "search_value": "Twitternation",
  "serach_url": "http://homestead.com/primis/in/faucibus/orci/luctus/et/ultrices.html?imperdiet=faucibus"
}, {
  "id": 2,
  "search_value": "Youspan",
  "serach_url": "https://economist.com/pellentesque.json?ipsum=cras&praesent=mi&blandit=pede&lacinia=malesuada&erat=in&vestibulum=imperdiet&sed=et&magna=commodo&at=vulputate&nunc=justo&commodo=in&placerat=blandit&praesent=ultrices&blandit=enim&nam=lorem&nulla=ipsum&integer=dolor&pede=sit"
}, {
  "id": 3,
  "search_value": "Innotype",
  "serach_url": "http://mtv.com/purus/phasellus/in/felis/donec.jsp?hac=porttitor&habitasse=id&platea=consequat&dictumst=in&etiam=consequat&faucibus=ut&cursus=nulla&urna=sed&ut=accumsan&tellus=felis&nulla=ut&ut=at&erat=dolor&id=quis&mauris=odio&vulputate=consequat&elementum=varius&nullam=integer&varius=ac&nulla=leo&facilisi=pellentesque&cras=ultrices&non=mattis&velit=odio&nec=donec&nisi=vitae&vulputate=nisi&nonummy=nam&maecenas=ultrices&tincidunt=libero&lacus=non&at=mattis&velit=pulvinar&vivamus=nulla&vel=pede&nulla=ullamcorper&eget=augue&eros=a&elementum=suscipit&pellentesque=nulla&quisque=elit&porta=ac&volutpat=nulla&erat=sed&quisque=vel&erat=enim&eros=sit&viverra=amet&eget=nunc&congue=viverra&eget=dapibus&semper=nulla&rutrum=suscipit&nulla=ligula&nunc=in&purus=lacus&phasellus=curabitur&in=at&felis=ipsum&donec=ac&semper=tellus&sapien=semper&a=interdum&libero=mauris&nam=ullamcorper&dui=purus&proin=sit&leo=amet&odio=nulla"
}, {
  "id": 4,
  "search_value": "Mynte",
  "serach_url": "https://hatena.ne.jp/purus/eu/magna/vulputate/luctus.json?magnis=luctus&dis=et&parturient=ultrices&montes=posuere&nascetur=cubilia&ridiculus=curae&mus=mauris&etiam=viverra&vel=diam&augue=vitae&vestibulum=quam&rutrum=suspendisse&rutrum=potenti&neque=nullam&aenean=porttitor&auctor=lacus&gravida=at&sem=turpis&praesent=donec&id=posuere&massa=metus&id=vitae&nisl=ipsum&venenatis=aliquam&lacinia=non&aenean=mauris"
}, {
  "id": 5,
  "search_value": "Quinu",
  "serach_url": "http://kickstarter.com/justo/lacinia/eget/tincidunt/eget/tempus/vel.js?non=eros&pretium=vestibulum&quis=ac&lectus=est&suspendisse=lacinia&potenti=nisi&in=venenatis&eleifend=tristique&quam=fusce&a=congue&odio=diam&in=id&hac=ornare&habitasse=imperdiet&platea=sapien&dictumst=urna&maecenas=pretium&ut=nisl&massa=ut&quis=volutpat&augue=sapien&luctus=arcu&tincidunt=sed&nulla=augue&mollis=aliquam&molestie=erat&lorem=volutpat&quisque=in&ut=congue&erat=etiam&curabitur=justo&gravida=etiam&nisi=pretium&at=iaculis&nibh=justo&in=in&hac=hac&habitasse=habitasse&platea=platea&dictumst=dictumst&aliquam=etiam&augue=faucibus&quam=cursus&sollicitudin=urna&vitae=ut&consectetuer=tellus"
}, {
  "id": 6,
  "search_value": "Babbleblab",
  "serach_url": "http://prnewswire.com/orci/luctus/et/ultrices/posuere/cubilia.xml?volutpat=tortor&quam=duis&pede=mattis&lobortis=egestas&ligula=metus&sit=aenean&amet=fermentum&eleifend=donec&pede=ut&libero=mauris&quis=eget&orci=massa&nullam=tempor&molestie=convallis&nibh=nulla&in=neque&lectus=libero&pellentesque=convallis"
}, {
  "id": 7,
  "search_value": "Yabox",
  "serach_url": "https://arizona.edu/ultricies/eu/nibh/quisque/id/justo/sit.aspx?nec=vivamus&condimentum=vel&neque=nulla&sapien=eget&placerat=eros&ante=elementum&nulla=pellentesque&justo=quisque&aliquam=porta&quis=volutpat&turpis=erat&eget=quisque&elit=erat&sodales=eros&scelerisque=viverra&mauris=eget&sit=congue"
}, {
  "id": 8,
  "search_value": "Camido",
  "serach_url": "https://apple.com/nec/condimentum/neque/sapien/placerat/ante.json?eget=pede&semper=lobortis&rutrum=ligula&nulla=sit&nunc=amet&purus=eleifend&phasellus=pede&in=libero&felis=quis&donec=orci&semper=nullam&sapien=molestie&a=nibh&libero=in&nam=lectus&dui=pellentesque&proin=at&leo=nulla&odio=suspendisse&porttitor=potenti&id=cras&consequat=in&in=purus&consequat=eu&ut=magna&nulla=vulputate&sed=luctus&accumsan=cum&felis=sociis&ut=natoque&at=penatibus&dolor=et&quis=magnis&odio=dis&consequat=parturient&varius=montes&integer=nascetur&ac=ridiculus&leo=mus&pellentesque=vivamus&ultrices=vestibulum&mattis=sagittis&odio=sapien&donec=cum&vitae=sociis&nisi=natoque&nam=penatibus&ultrices=et"
}, {
  "id": 9,
  "search_value": "Dazzlesphere",
  "serach_url": "http://w3.org/vel/dapibus.jsp?erat=congue&vestibulum=vivamus&sed=metus&magna=arcu&at=adipiscing&nunc=molestie&commodo=hendrerit&placerat=at&praesent=vulputate&blandit=vitae&nam=nisl&nulla=aenean&integer=lectus&pede=pellentesque&justo=eget&lacinia=nunc&eget=donec&tincidunt=quis&eget=orci&tempus=eget&vel=orci&pede=vehicula&morbi=condimentum&porttitor=curabitur&lorem=in&id=libero&ligula=ut&suspendisse=massa"
}, {
  "id": 10,
  "search_value": "Mydo",
  "serach_url": "https://stumbleupon.com/volutpat/quam/pede/lobortis/ligula/sit.png?nam=in&ultrices=tempus&libero=sit&non=amet&mattis=sem&pulvinar=fusce"
}];

export default function SearchSection() {
  const [searchTearm, setSearchTerm] = useState("");
  // console.log(dummySearch)
  return (
    <section id="hero" className="clearfix">
      <div className="container d-flex">
        <div className="row justify-content-center align-self-center">
          <div className="col-lg-12 intro-info align-self-center text-center">
            <h2>
              Search for Top College Admission, Fees, Courses, Exams, Reviews
              from 12,000+ Colleges in India
            </h2>
            <div>
              <form className="searchbar">
                <input
                  id="search" autoComplete="off"
                  type="text"
                  placeholder="Search for Colleges, Courses or Exams"
                  onChange={(event=>{
                    setSearchTerm(event.target.value);
                  })}
                />
                <button className="btn-search" type="button">
                  Seach
                </button>
              </form>
              <div className="searchbar">
                <ul>
                  {
                    dummySearch.filter((val)=>{
                      if(searchTearm == ""){
                        return
                      }else if (val.search_value.toLocaleLowerCase().includes(searchTearm.toLocaleLowerCase())){
                        return val
                      }
                    }).map((val, key)=>{
                      return <li key={key}>{val.search_value}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
