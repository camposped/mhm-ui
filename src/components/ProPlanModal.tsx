import "./ProPlanModal.scss";
import { Modal } from "antd";
import { Button } from "./misc/Button";
import { ProStar } from "./misc/ProStar";
import CheckOutlined from "@ant-design/icons/lib/icons/CheckOutlined";
import HeartFilled from "@ant-design/icons/lib/icons/HeartFilled";
import LocationIconWithStroke from "./misc/icon/LocationIconWithStroke";

interface EnterprisePlanModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ProPlanModal({
  visible,
  onClose,
}: EnterprisePlanModalProps) {
  function onSwitchPlansClick() {
    window.location.href = "/menu/pricing.do";
  }

  return (
    <Modal className={"pro-plan-modal "} visible={visible} onCancel={onClose}>
      <div className={"side-info"}>
        <section>
          <label>
            Get Pro Access! <ProStar />
          </label>
          <div>
            <label id={"price"}>Only $23/mo</label>
            <i>paid annually</i>
          </div>
        </section>

        <div>
          Your complete marketing suite - <b>Incredible Value!</b>
        </div>

        <section>
          <div className={"bold"}>Design</div>
          <ul className={"design-list"}>
            <li>
              <CheckOutlined />18,000 restaurant templates
            </li>
            <li>
              <CheckOutlined />Custom sizes
            </li>
            <li>
              <CheckOutlined />Unlimited hi-res downloads
            </li>
          </ul>
        </section>

        <i>- and -</i>

        <section>
          <div className={"bold"}>Digital</div>
          <ul className={"design-list"}>
            <li>
              <CheckOutlined />Publish watermark-free
            </li>
            <li>
              <CheckOutlined />Unlimited QR codes, unlimited scans
            </li>
            <li>
              <CheckOutlined />Contactless online menus, unlimited views
            </li>
            <li>
              <CheckOutlined />Custom landing pages, unlimited views
            </li>
          </ul>
        </section>

        <div className="bold heart-icon"><HeartFilled /> Priority Customer Service</div>
        <div className="bold location-icon"><LocationIconWithStroke /> Add locations for $10/mo</div>

        <footer>
          <Button type={"Primary"} onClick={onSwitchPlansClick}>
            <span>Go Pro</span>
          </Button>
          <Button type={"LinkPrimary"} onClick={onSwitchPlansClick}>
              <span>Learn More</span>
          </Button>
        </footer>
      </div>

      <div id="rightSideImage"></div>
    </Modal>
  );
}
