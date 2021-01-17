import React from "react";
import Icon from "../../Components/Icon";
import styles from "../Dashboard/Dashboard.module.css";
class Dashboard extends React.Component{
        constructor(props){
            super(props)
            this.state={id:window.sessionStorage.getItem('key')||''}
        }
        componentDidMount(){
            if(this.state.id===''){
                this.props.history.push('/Login')
           }
        }
        Delete=()=>{
           window.sessionStorage.removeItem('key')
           this.props.history.push('/Login')
        }
        render(){
    return(
        <div className={styles.container}>
          <div className={styles.icon}>ShoppingShop</div>
          <div className={styles.inputbox}>
              <div className={styles.searchbar}><input/></div>
             <div className={styles.searchicon}> <Icon name='search' size='2x' color='black'/></div>
          </div>
         <div className={styles.buttonbox}> <button>More</button></div>
          <div className={styles.cartbox}><Icon name='shopping-cart' size='2x' color='black'/></div>
         <div className={styles.logoutbox}><Icon name='sign-out' size='2x' color='black' onClick={this.Delete}/></div>
        </div>
    )
 }
}
export default Dashboard